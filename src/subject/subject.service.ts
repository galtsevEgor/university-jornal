import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateSubjectDto } from './dto/create-subject.dto'
import { UpdateSubjectDto } from './dto/update-subject.dto'

@Injectable()
export class SubjectService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: CreateSubjectDto) {
    return await this.prismaService.subject.create({
      data: {
        name: dto.name,
        type: dto.type,
        teacher: {
          // сделать проверку на существование учителя
          connect: { id: dto.teacherId },
        },
      },
    });
  }

  async findAll() {
    return await this.prismaService.subject.findMany({
      include: { teacher: true },
    });
  }

  async findOne(id: string) {
    const subject = await this.prismaService.subject.findUnique({
      where: { id },
      include: { teacher: true },
    });
    if (!subject) {
      throw new NotFoundException(`Subject with ID "${id}" not found`);
    }
    return subject;
  }

  async update(id: string, dto: UpdateSubjectDto) {
    const subject = await this.prismaService.subject.findUnique({
      where: { id },
    });
    if (!subject) {
      throw new NotFoundException(`Subject with ID "${id}" not found`);
    }
    return await this.prismaService.subject.update({
      where: { id },
      data: {
        name: dto.name,
        type: dto.type,
        teacher: dto.teacherId ? { connect: { id: dto.teacherId } } : undefined,
      },
    });
  }

  async delete(id: string) {
    const subject = await this.prismaService.subject.findUnique({
      where: { id },
    });
    if (!subject) {
      throw new NotFoundException(`Subject with ID "${id}" not found`);
    }
    return await this.prismaService.subject.delete({
      where: { id },
    });
  }
}
