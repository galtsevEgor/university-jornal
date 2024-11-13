import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IS_DEV_ENV } from './lib/common/utils/is-dev.util';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GroupModule } from './group/group.module';
import { ScheduleModule } from './schedule/schedule.module';
import { DayOfWeekModule } from './day-of-week/day-of-week.module';
import { SubjectModule } from './subject/subject.module';
import { SubjectInstanceModule } from './subject-instance/subject-instance.module';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: !IS_DEV_ENV,
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    GroupModule,
    ScheduleModule,
    DayOfWeekModule,
    SubjectModule,
    SubjectInstanceModule,
    LessonModule,
  ],
})
export class AppModule {}
