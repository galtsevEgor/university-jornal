import { Injectable } from '@nestjs/common';
import { CreateSubjectInstanceDto } from './dto/create-subject-instance.dto';
import { UpdateSubjectInstanceDto } from './dto/update-subject-instance.dto';
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class SubjectInstanceService {
  constructor(private readonly prismaService: PrismaService) {}

  //логику подправить с перманентом подправить и в update
  public async create(dto: CreateSubjectInstanceDto) {
    return await this.prismaService.subjectInstance.create({
      data: {
        subject: {
          connect: { id: dto.subjectId },
        },
        isPermanent: dto.isPermanent,
        lessonEven: dto.lessonEvenId ? { connect: { id: dto.lessonEvenId } } : undefined,
        lessonOdd: dto.lessonOddId ? { connect: { id: dto.lessonOddId } } : undefined,
      },
    });
  }

  public async findAll() {
    return await this.prismaService.subjectInstance.findMany({
      include: { subject: true, lessonEven: true, lessonOdd: true },
    });
  }

  public async findOne(id: string) {
    return await this.prismaService.subjectInstance.findUnique({
      where: { id },
      include: { subject: true, lessonEven: true, lessonOdd: true },
    });
  }

  //логику подправить с перманентом подправить
  public async update(id: string, dto: UpdateSubjectInstanceDto) {
    return await this.prismaService.subjectInstance.update({
      where: { id },
      data: {
        isPermanent: dto.isPermanent,
        lessonEven: dto.lessonEvenId ? { connect: { id: dto.lessonEvenId } } : { disconnect: true },
        lessonOdd: dto.lessonOddId ? { connect: { id: dto.lessonOddId } } : { disconnect: true },
      },
    });
  }

  public async remove(id: string) {
    return await this.prismaService.subjectInstance.delete({
      where: { id },
    });
  }
}
