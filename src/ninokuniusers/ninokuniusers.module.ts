// src/ninokuniusers/ninokuniusers.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NinokuniUsersService } from './ninokuniusers.service';
import { NinokuniUsersController } from './ninokuniusers.controller';
import { NinokuniUser } from './ninokuniuser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NinokuniUser])],
  providers: [NinokuniUsersService],
  controllers: [NinokuniUsersController],
})
export class NinokuniUsersModule {}
