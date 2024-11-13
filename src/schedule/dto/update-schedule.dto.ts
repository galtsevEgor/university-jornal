import { IsArray } from 'class-validator/types/decorator/typechecker/IsArray'
import { IsEnum, IsNotEmpty } from 'class-validator'
import { DayOfWeekEnum } from 'prisma/__generated__'

export class UpdateScheduleDto {
  @IsArray()
  @IsEnum(DayOfWeekEnum, { each: true })
  @IsNotEmpty({ message: 'Дни расписания не могут быть пустыми' })
  days: DayOfWeekEnum[];
}
