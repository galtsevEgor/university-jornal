import { Type } from 'class-transformer'
import { IsString, IsNotEmpty, IsArray, IsOptional, ValidateNested } from 'class-validator'

export class StudentDto {
	@IsString({ message: 'ID студента должно быть строкой.' })
	id: string;
}

export class ScheduleDto {
	@IsString({ message: 'ID расписания должно быть строкой.' })
	id: string;
}

export class AddGroupDto {
	@IsString({ message: 'Имя должно быть строкой.' })
	@IsNotEmpty({ message: 'Имя обязательно для заполнения.' })
	name: string;

	@IsOptional()
	@IsArray({ message: 'Студенты должны быть массивом.' })
	@ValidateNested({ each: true })
	@Type(() => StudentDto)
	students?: StudentDto[];
}