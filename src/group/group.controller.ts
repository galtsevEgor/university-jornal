import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { UpdateGroupDto } from './dto/update-group.dto'
import { AddGroupDto } from './dto/add-group.dto'

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async findMany() {
    return this.groupService.findMany();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async findById(@Param('id') id: string) {
    return this.groupService.findById(id);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  public async create(
    @Body() dto: AddGroupDto
  ) {
    return this.groupService.create(dto);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  public async patchGroup(@Param('id') id: string , @Body() dto: UpdateGroupDto) {
    return this.groupService.patchGroup(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  public async delete(@Param('id') id: string) {
    return this.groupService.delete(id);
  }
}
