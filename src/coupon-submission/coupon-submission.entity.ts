// src/coupon-submissions/coupon-submission.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CouponSubmission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  server: string;

  @Column()
  nickname: string;

  @Column()
  couponCode: string;
}
