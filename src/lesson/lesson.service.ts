import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';

@Injectable()
export class LessonService {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(createLessonDto: CreateLessonDto) {
    const dayWithLesson = await this.prismaService.dayOfWeek.findUnique({
      where: { id: createLessonDto.dayId },
      include: {
        lessons: {
          where: { position: createLessonDto.position },
        },
      },
    });
  
    if (!dayWithLesson) {
      throw new NotFoundException('Day of week not found');
    }
    
    if (dayWithLesson.lessons.length > 0) {
      throw new ConflictException('Lesson with this position already exists in this day');
    }
  
    return this.prismaService.lesson.create({
      data: {
        position: createLessonDto.position,
        day: { connect: { id: createLessonDto.dayId } },
      },
    });
  }
  
  public async getLessonById(lessonId: string) {
    const lesson = await this.prismaService.lesson.findUnique({
      where: {id: lessonId}
    })
    if (!lesson) {
      throw new NotFoundException(`Lesson not found`);
    }

    return lesson
  } 

  public async getLessonsByGroup(groupId: string) {
    return this.prismaService.lesson.findMany({
      where: { day: { schedule: { groupId } } },
      include: {
        evenWeek: true,
        oddWeek: true,
      },
    });
  }

  public async getLessonsByDay(dayId: string) {
    return this.prismaService.lesson.findMany({
      where: { dayId },
      include: {
        evenWeek: {
          include: { subject: true },
        },
        oddWeek: {
          include: { subject: true },
        },
      },
      orderBy: { position: 'asc' },
    });
  }
  
  // isPermanent не совсем корректо чтобы он был в subjectInstance 
  public async update(lessonId: string, updateLessonDto: UpdateLessonDto) {
    const existingLesson = await this.prismaService.lesson.findUnique({
      where: { id: lessonId },
    });
    
    if (!existingLesson) {
      throw new NotFoundException('Lesson not found');
    }
    
    return this.prismaService.$transaction(async (prisma) => {
      await prisma.subjectInstance.deleteMany({
        where: {
          OR: [
            { lessonEvenId: lessonId },
            { lessonOddId: lessonId },
          ],
        },
      });
  
      const isPermanent = JSON.stringify(updateLessonDto.subjectInstancesEven) === JSON.stringify(updateLessonDto.subjectInstancesOdd);
  
      if (updateLessonDto.subjectInstancesEven && updateLessonDto.subjectInstancesEven.length > 0) {
        const evenInstances = updateLessonDto.subjectInstancesEven.map(subjectId => ({
          subjectId,
          isPermanent,
          lessonEvenId: lessonId,
        }));
        await prisma.subjectInstance.createMany({ data: evenInstances });
      }
  
      if (updateLessonDto.subjectInstancesOdd && updateLessonDto.subjectInstancesOdd.length > 0) {
        const oddInstances = updateLessonDto.subjectInstancesOdd.map(subjectId => ({
          subjectId,
          isPermanent,
          lessonOddId: lessonId,
        }));
        await prisma.subjectInstance.createMany({ data: oddInstances });
      }
  
      return this.getLessonWithSubjects(lessonId);
    });
  }
  
  
  public async getLessonWithSubjects(lessonId: string) {
    return this.prismaService.lesson.findUnique({
      where: { id: lessonId },
      include: {
        evenWeek: true,
        oddWeek: true,
      },
    });
  }  


  public async remove(lessonId: string) {
    await this.prismaService.subjectInstance.deleteMany({
      where: {
        OR: [
          { lessonEvenId: lessonId },
          { lessonOddId: lessonId },
        ],
      },
    });  
    return this.getLessonWithSubjects(lessonId);
  }
}
