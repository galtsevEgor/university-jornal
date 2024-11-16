import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { DayOfWeekService } from 'src/day-of-week/day-of-week.service';
import { DayOfWeekEnum } from 'prisma/__generated__';

@Injectable()
export class ScheduleService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly dayOfWeekService: DayOfWeekService,
  ) {}

  public async create({ groupId }: { groupId: string }) {
    const schedule = await this.prismaService.schedule.create({
      data: {
        group: {
          connect: { id: groupId },
        },
      },
    });

    const days: DayOfWeekEnum[] = [
      DayOfWeekEnum.MONDAY,
      DayOfWeekEnum.TUESDAY,
      DayOfWeekEnum.WEDNESDAY,
      DayOfWeekEnum.THURSDAY,
      DayOfWeekEnum.FRIDAY,
      DayOfWeekEnum.SATURDAY,
    ];
    for (const day of days) {
      await this.dayOfWeekService.createDay({
        scheduleId: schedule.id,
        dayOfWeek: day,
      });
    }

    return schedule;
  }

  public async findById(id: string) {
    const schedule = await this.prismaService.schedule.findUnique({
      where: { id },
      include: {
        group: true, // вроде не обязательно
        days: {
          include: {
            lessons: {
              include: {
                evenWeek: {
                  include: {
                    subject: true,
                  },
                },
                oddWeek: {
                  include: {
                    subject: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!schedule) {
      throw new NotFoundException(`Schedule with ID "${id}" not found`);
    }

    return schedule;
  }

  // пока не надо
  public async update(id: string, dto: UpdateScheduleDto) {
    const schedule = await this.prismaService.schedule.findUnique({
      where: { id },
      include: {
        days: true,
      },
    });

    if (!schedule) {
      throw new NotFoundException(`Schedule with ID "${id}" not found`);
    }

    return await this.prismaService.schedule.findUnique({
      where: { id },
      include: {
        days: true,
      },
    });
  }
}
