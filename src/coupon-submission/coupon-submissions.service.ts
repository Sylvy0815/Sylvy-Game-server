// src/coupon-submissions/coupon-submissions.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CouponSubmission } from './coupon-submission.entity';

@Injectable()
export class CouponSubmissionsService {
  constructor(
    @InjectRepository(CouponSubmission)
    private readonly couponSubmissionsRepository: Repository<CouponSubmission>,
  ) {}

  async create(createDto: {
    server: string;
    nickname: string;
    couponCode: string;
  }): Promise<CouponSubmission> {
    const couponSubmission = this.couponSubmissionsRepository.create(createDto);
    return this.couponSubmissionsRepository.save(couponSubmission);
  }

  async findAll(): Promise<CouponSubmission[]> {
    return this.couponSubmissionsRepository.find();
  }

  async update(
    id: number,
    updateDto: { server?: string; nickname?: string; couponCode?: string },
  ): Promise<CouponSubmission> {
    const couponSubmission = await this.couponSubmissionsRepository.findOneBy({
      id,
    });
    if (!couponSubmission) {
      throw new NotFoundException(
        `Coupon Submission with ID "${id}" not found`,
      );
    }

    Object.assign(couponSubmission, updateDto);
    return this.couponSubmissionsRepository.save(couponSubmission);
  }

  async remove(id: number): Promise<void> {
    const result = await this.couponSubmissionsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(
        `Coupon Submission with ID "${id}" not found`,
      );
    }
  }
}
