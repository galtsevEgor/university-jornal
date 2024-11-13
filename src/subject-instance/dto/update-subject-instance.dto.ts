import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class UpdateSubjectInstanceDto {
  @IsOptional()
  @IsBoolean()
  isPermanent?: boolean;

  @IsOptional()
  @IsString()
  lessonEvenId?: string;

  @IsOptional()
  @IsString()
  lessonOddId?: string;
}
