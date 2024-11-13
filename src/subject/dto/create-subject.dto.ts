import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { SubjectTypeEnum } from 'prisma/__generated__'

export class CreateSubjectDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(SubjectTypeEnum)
  type: SubjectTypeEnum;

  @IsString()
  @IsNotEmpty()
  teacherId: string;
}
