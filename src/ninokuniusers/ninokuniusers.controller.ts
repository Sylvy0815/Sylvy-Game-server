// src/ninokuniusers/ninokuniusers.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { NinokuniUsersService } from './ninokuniusers.service';

@Controller('ninokuniusers')
export class NinokuniUsersController {
  constructor(private readonly ninokuniUsersService: NinokuniUsersService) {}

  @Post()
  create(
    @Body() createUserDto: { server: string; nickname: string; pid: string },
  ) {
    return this.ninokuniUsersService.create(
      createUserDto.server,
      createUserDto.nickname,
      createUserDto.pid,
    );
  }

  @Get()
  findAll() {
    return this.ninokuniUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ninokuniUsersService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: { server?: string; nickname?: string; pid?: string },
  ) {
    return this.ninokuniUsersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ninokuniUsersService.remove(+id);
  }
}
