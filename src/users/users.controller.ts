import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getTest() {
    return this.usersService.getTest();
  }

  @Post()
  addUser(@Body() body: any): string {
    // 사용자 정보 처리 로직
    return 'User added' + body;
  }
}
