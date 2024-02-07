// src/ninokuniusers/ninokuniuser.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NinokuniUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  server: string;

  @Column()
  nickname: string;

  @Column()
  pid: string; // 계정코드(PID)
}
