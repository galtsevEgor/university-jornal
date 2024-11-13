import { IsEnum, IsOptional, IsString } from 'class-validator';
import { SubjectTypeEnum } from 'prisma/__generated__'

export class UpdateSubjectDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEnum(SubjectTypeEnum)
  @IsOptional()
  type?: SubjectTypeEnum;

  @IsString()
  @IsOptional()
  teacherId?: string;
}
