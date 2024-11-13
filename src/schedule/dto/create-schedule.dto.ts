import { IsString, IsArray, IsEnum } from 'class-validator'
import { DayOfWeekEnum } from 'prisma/__generated__'

export class CreateScheduleDto {
  @IsString()
  groupId: string;

  @IsArray()
  @IsEnum(DayOfWeekEnum, { each: true })
  days: DayOfWeekEnum[];
}
