import { Type } from 'class-transformer'
import { IsEnum, IsOptional, IsArray, ValidateNested, IsString } from 'class-validator'
import { DayOfWeekEnum } from 'prisma/__generated__'

class LessonDto {
  @IsString()
  id: string;
}

export class UpdateDayOfWeekDto {
  @IsEnum(DayOfWeekEnum, { message: 'Invalid day of the week' })
  @IsOptional()
  dayOfWeek?: DayOfWeekEnum;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LessonDto)
  @IsOptional()
  lessons?: LessonDto[];
}