import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { NinokuniUsersController } from './ninokuniusers/ninokuniusers.controller';
import { NinokuniUsersService } from './ninokuniusers/ninokuniusers.service';
import { NinokuniUsersModule } from './ninokuniusers/ninokuniusers.module';

@Module({
  imports: [
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
    NinokuniUsersModule,
  ],
  controllers: [AppController, UsersController, NinokuniUsersController],
  providers: [AppService, UsersService, NinokuniUsersService],
})
export class AppModule {}
