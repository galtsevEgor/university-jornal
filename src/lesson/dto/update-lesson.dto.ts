import { IsArray, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateLessonDto {
  @IsArray()
  @IsOptional()
  subjectInstancesEven?: string[]; 

  @IsArray()
  @IsOptional()
  subjectInstancesOdd?: string[]; 

  isPermanent: boolean;
}
