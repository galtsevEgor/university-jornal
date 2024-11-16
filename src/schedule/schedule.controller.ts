import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto'

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}


  // нахой не надо
  // @Post('')
  // async create(@Body() createScheduleDto: CreateScheduleDto) {
  //   try {
  //     return await this.scheduleService.create(createScheduleDto);
  //   } catch (error) {
  //     throw new NotFoundException(error.message);
  //   }
  // }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      return await this.scheduleService.findById(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  // Пока не надо, но здесь можно добавить метод для обновления расписания
  // @Put(':id')
  // async update(@Param('id') id: string, @Body() updateScheduleDto: UpdateScheduleDto) {
  //   try {
  //     return await this.scheduleService.update(id, updateScheduleDto);
  //   } catch (error) {
  //     throw new NotFoundException(error.message);
  //   }
  // }
}
