import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { NinokuniUsersController } from './ninokuniusers/ninokuniusers.controller';
import { NinokuniUsersService } from './ninokuniusers/ninokuniusers.service';
import { NinokuniUsersModule } from './ninokuniusers/ninokuniusers.module';

@Module({
  imports: [NinokuniUsersModule],
  controllers: [AppController, UsersController, NinokuniUsersController],
  providers: [AppService, UsersService, NinokuniUsersService],
})
export class AppModule {}
