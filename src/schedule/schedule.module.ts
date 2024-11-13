import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { DayOfWeekService } from 'src/day-of-week/day-of-week.service'
import { DayOfWeekModule } from 'src/day-of-week/day-of-week.module'
import { LessonService } from 'src/lesson/lesson.service'

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService, DayOfWeekService, LessonService],
})
export class ScheduleModule {}
