// src/ninokuniusers/ninokuniusers.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { NinokuniUsersService } from './ninokuniusers.service';

@Controller('ninokuniusers')
export class NinokuniUsersController {
  constructor(private readonly ninokuniUsersService: NinokuniUsersService) {}

  @Post()
  async create(
    @Body() createUserDto: { server: string; nickname: string; pid: string },
  ) {
    return this.ninokuniUsersService.create(
      createUserDto.server,
      createUserDto.nickname,
      createUserDto.pid,
    );
  }

  // 다른 API 엔드포인트...
}
