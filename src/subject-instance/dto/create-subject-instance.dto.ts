import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateSubjectInstanceDto {
  @IsString()
  subjectId: string;

  @IsBoolean()
  isPermanent: boolean;

  @IsOptional()
  @IsString()
  lessonEvenId?: string;

  @IsOptional()
  @IsString()
  lessonOddId?: string;
}
