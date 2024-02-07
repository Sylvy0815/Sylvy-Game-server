// src/ninokuniusers/ninokuniusers.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NinokuniUser } from './ninokuniuser.entity';

@Injectable()
export class NinokuniUsersService {
  constructor(
    @InjectRepository(NinokuniUser)
    private ninokuniUserRepository: Repository<NinokuniUser>,
  ) {}

  async create(
    server: string,
    nickname: string,
    pid: string,
  ): Promise<NinokuniUser> {
    const newUser = this.ninokuniUserRepository.create({
      server,
      nickname,
      pid,
    });
    await this.ninokuniUserRepository.save(newUser);
    return newUser;
  }

  // 다른 CRUD 메소드...
}
