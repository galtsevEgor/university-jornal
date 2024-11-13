import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateDayOfWeekDto} from './dto/create-day-of-week.dto'
import { UpdateDayOfWeekDto } from './dto/update-day-of-week.dto'
import { LessonService } from 'src/lesson/lesson.service'

@Injectable()
export class DayOfWeekService {

  public constructor(private readonly prismaService: PrismaService, private readonly lessonService: LessonService) {}

  public async createDay(data: CreateDayOfWeekDto) {
    const day = await this.prismaService.dayOfWeek.create({
      data: {
        dayOfWeek: data.dayOfWeek,
        schedule: {
          connect: { id: data.scheduleId },
        },
      },
    });

    for (let position = 1; position <= 8; position++) {
      await this.lessonService.create({
        position,
        dayId: day.id,
      });
    }

    return day;
  }

  public async findAll(scheduleId: string) {
    return await this.prismaService.dayOfWeek.findMany({
      where: { scheduleId },
      include: { lessons: true },
    });
  }

  public async findById(id: string) {
    const day = await this.prismaService.dayOfWeek.findUnique({
      where: { id },
      include: { lessons: true },
    });
    if (!day) {
      throw new NotFoundException(`Day with ID "${id}" not found`);
    }
    return day;
  }

  // пока не надо

  // public async update(id: string, data: UpdateDayOfWeekDto) {
  //   const day = await this.prismaService.dayOfWeek.findUnique({
  //     where: { id },
  //   });
  //   if (!day) {
  //     throw new NotFoundException(`Day with ID "${id}" not found`);
  //   }
  
  //   // Обновление данных дня недели
  //   return await this.prismaService.dayOfWeek.update({
  //     where: { id },
  //     data: {
  //       ...data,
  //       // Можно добавить логику обновления уроков, если это необходимо
  //     },
  //   });
  // }
}
