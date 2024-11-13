import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { ScheduleService } from 'src/schedule/schedule.service'
import { DayOfWeekService } from 'src/day-of-week/day-of-week.service'
import { LessonService } from 'src/lesson/lesson.service'

@Module({
  controllers: [GroupController],
  providers: [GroupService, ScheduleService, DayOfWeekService, LessonService],
})
export class GroupModule {}
