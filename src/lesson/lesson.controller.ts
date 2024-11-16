import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';

@Controller('lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  //тоже нахой не надо
  // @Post('')
  // async create(@Body() createLessonDto: CreateLessonDto) {
  //   return this.lessonService.create(createLessonDto);
  // }

  @Get(':lessonId')
  async getLessonsById(@Param('lessonId') groupId: string) {
    return this.lessonService.getLessonsByGroup(groupId);
  }

  // @Get('group/:groupId')
  // async getLessonsByGroup(@Param('groupId') groupId: string) {
  //   return this.lessonService.getLessonsByGroup(groupId);
  // }

  @Get('day/:dayId')
  async getLessonsByDay(@Param('dayId') dayId: string) {
    return this.lessonService.getLessonsByDay(dayId);
  }

  @Put(':lessonId')
  async update(@Param('lessonId') lessonId: string, @Body() updateLessonDto: UpdateLessonDto) {
    return this.lessonService.update(lessonId, updateLessonDto);
  }

  @Delete(':lessonId')
  async remove(@Param('lessonId') lessonId: string) {
    return this.lessonService.remove(lessonId);
  }
}
