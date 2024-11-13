import { Module } from '@nestjs/common';
import { DayOfWeekService } from './day-of-week.service';
import { DayOfWeekController } from './day-of-week.controller';
import { LessonService } from 'src/lesson/lesson.service'

@Module({
  controllers: [DayOfWeekController],
  providers: [DayOfWeekService, LessonService],
  exports: [DayOfWeekService],
})
export class DayOfWeekModule {}
