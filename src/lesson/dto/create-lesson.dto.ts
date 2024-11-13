import { IsArray, IsString, IsOptional, IsInt } from 'class-validator';

export class CreateLessonDto {
  @IsString()
  dayId: string;
  
  @IsInt()
  position: number;
}
