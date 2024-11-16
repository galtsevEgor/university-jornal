import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { DayOfWeekService } from './day-of-week.service';
import { CreateDayOfWeekDto } from './dto/create-day-of-week.dto';

@Controller('day-of-week')
export class DayOfWeekController {
  constructor(private readonly dayOfWeekService: DayOfWeekService) {}

  // нахой не надо
  // @Post('')
  // async create(@Body() createDayOfWeekDto: CreateDayOfWeekDto) {
  //   try {
  //     return await this.dayOfWeekService.createDay(createDayOfWeekDto);
  //   } catch (error) {
  //     throw new NotFoundException(error.message);
  //   }
  // }

  @Get(':scheduleId')
  async findAll(@Param('scheduleId') scheduleId: string) {
    try {
      return await this.dayOfWeekService.findAllForSchedule(scheduleId);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Get('day/:id')
  async findById(@Param('id') id: string) {
    try {
      return await this.dayOfWeekService.findById(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
