import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { DayOfWeekEnum } from 'prisma/__generated__';

export class CreateDayOfWeekDto {
  @IsNotEmpty()
  @IsEnum(DayOfWeekEnum)
  dayOfWeek: DayOfWeekEnum;

  @IsString()
  @IsNotEmpty()
  scheduleId: string;
}




