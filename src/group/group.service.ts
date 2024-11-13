import { PrismaService } from './../prisma/prisma.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from 'prisma/__generated__'
import { UpdateGroupDto } from './dto/update-group.dto'
import { AddGroupDto } from './dto/add-group.dto'
import { ScheduleService } from 'src/schedule/schedule.service'

@Injectable()
export class GroupService {
  public constructor(private readonly prismaService: PrismaService, private readonly scheduleService: ScheduleService) {}

  public async findMany () {
    return await this.prismaService.group.findMany() 
  }

  public async create({ name, students = [] }: AddGroupDto) {
    const existGroup = await this.prismaService.group.findUnique({
      where: { name },
    });
  
    if (existGroup) {
      throw new BadRequestException('Group already exists');
    }
  
    const group = await this.prismaService.group.create({
      data: {
        name,
        students: {
          connect: students.map((student) => ({ id: student.id })),
        },
      },
    });
  
    const schedule = await this.scheduleService.create({
      groupId: group.id,
    });
  
    return { ...group, schedule };
  }

  public async delete(name: string) {
    const group = await this.prismaService.group.delete({
      where: {
        name,
      },
    });

    return group;
  }

  public async patchGroup(id: string, dto: UpdateGroupDto) {
    if (Object.keys(dto).length === 0) {
      throw new BadRequestException('No data provided for update');
    }
    const existingGroup = await this.prismaService.group.findUnique({
      where: { id },
    });
    if (!existingGroup) {
      throw new NotFoundException(`Group with name "${id}" not found`);
    }

    const updateData: Prisma.GroupUpdateInput = {
      ...dto,
      students: dto.students
        ? {
          set: dto.students.map((student) => {
            if (!student.id) throw new BadRequestException('Each student object must have an id');
            return { id: student.id };
          }),
          }
        : undefined,
      schedule: dto.schedule
        ? {
            connect: { id: dto.schedule.id },
          }
        : undefined,
    };

    try {
      const updatedGroup = await this.prismaService.group.update({
        where: { id },
        data: updateData,
      });

      return updatedGroup;
    } catch (error) {
      console.error("Error updating group:", error);
      throw new Error('Failed to update group');
    }
  }

  public async findById (id: string) {
    const group = await this.prismaService.group.findUnique({
      where: { id },
      include: {
        students: true,
        schedule: true,
    },
    });
    if (!group) {
      throw new NotFoundException(`Group not found`);
    }

    return group
  }
}
