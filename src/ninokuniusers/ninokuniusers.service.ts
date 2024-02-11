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
    return this.ninokuniUserRepository.save(newUser);
  }

  async findAll(): Promise<NinokuniUser[]> {
    return this.ninokuniUserRepository.find();
  }

  async findOne(id: number): Promise<NinokuniUser> {
    return this.ninokuniUserRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateUserDto: { server?: string; nickname?: string; pid?: string },
  ): Promise<NinokuniUser> {
    const user = await this.findOne(id);
    if (updateUserDto.server) user.server = updateUserDto.server;
    if (updateUserDto.nickname) user.nickname = updateUserDto.nickname;
    if (updateUserDto.pid) user.pid = updateUserDto.pid;
    return this.ninokuniUserRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.ninokuniUserRepository.delete(id);
  }

  async removeAll(): Promise<void> {
    await this.ninokuniUserRepository.clear();
  }
}
