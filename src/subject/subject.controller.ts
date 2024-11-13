import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post()
  async create(@Body() createSubjectDto: CreateSubjectDto) {
    return await this.subjectService.create(createSubjectDto);
  }

  @Get()
  async findAll() {
    return await this.subjectService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.subjectService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
    return await this.subjectService.update(id, updateSubjectDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.subjectService.delete(id);
  }
}

