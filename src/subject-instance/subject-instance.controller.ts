import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubjectInstanceService } from './subject-instance.service';
import { CreateSubjectInstanceDto } from './dto/create-subject-instance.dto';
import { UpdateSubjectInstanceDto } from './dto/update-subject-instance.dto';

@Controller('subject-instance')
export class SubjectInstanceController {
  constructor(private readonly subjectInstanceService: SubjectInstanceService) {}

  @Post('')
  create(@Body() dto: CreateSubjectInstanceDto) {
    return this.subjectInstanceService.create(dto);
  }

  @Get('')
  findAll() {
    return this.subjectInstanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjectInstanceService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSubjectInstanceDto) {
    return this.subjectInstanceService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectInstanceService.remove(id);
  }
}
