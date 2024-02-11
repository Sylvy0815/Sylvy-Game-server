// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { NinokuniUsersModule } from './ninokuniusers/ninokuniusers.module';
import { CouponSubmissionsModule } from './coupon-submission/coupon-submissions.module';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { TasksService } from './tasks/tasks.service';
@Module({
  imports: [
    ScheduleModule.forRoot(),
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DATABASE_HOST'),
        port: +config.get('DATABASE_PORT'),
        username: config.get('DATABASE_USERNAME'),
        password: config.get('DATABASE_PASSWORD'),
        database: config.get('DATABASE_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // 주의: 프로덕션 환경에서는 false로 설정
      }),
      inject: [ConfigService],
    }),
    NinokuniUsersModule, // 이 모듈이 NinokuniUsersService와 NinokuniUsersController를 처리합니다.
    CouponSubmissionsModule, // 쿠폰 제보 모듈
  ],
  controllers: [AppController, UsersController], // NinokuniUsersController를 여기서 제거
  providers: [TasksService, AppService, UsersService], // NinokuniUsersService를 여기서 제거
})
export class AppModule {}
