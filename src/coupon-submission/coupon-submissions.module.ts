// src/coupon-submissions/coupon-submissions.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CouponSubmissionsController } from './coupon-submissions.controller';
import { CouponSubmissionsService } from './coupon-submissions.service';
import { CouponSubmission } from './coupon-submission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CouponSubmission])],
  controllers: [CouponSubmissionsController],
  providers: [CouponSubmissionsService],
})
export class CouponSubmissionsModule {}
