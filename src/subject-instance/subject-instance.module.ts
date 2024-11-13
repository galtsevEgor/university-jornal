import { Module } from '@nestjs/common';
import { SubjectInstanceService } from './subject-instance.service';
import { SubjectInstanceController } from './subject-instance.controller';

@Module({
  controllers: [SubjectInstanceController],
  providers: [SubjectInstanceService],
})
export class SubjectInstanceModule {}
