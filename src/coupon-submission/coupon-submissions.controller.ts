// src/coupon-submissions/coupon-submissions.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { CouponSubmissionsService } from './coupon-submissions.service';
import { CouponSubmission } from './coupon-submission.entity';

@Controller('coupon-submissions')
export class CouponSubmissionsController {
  constructor(
    private readonly couponSubmissionsService: CouponSubmissionsService,
  ) {}

  @Post()
  create(
    @Body() createDto: { server: string; nickname: string; couponCode: string },
  ): Promise<CouponSubmission> {
    return this.couponSubmissionsService.create(createDto);
  }

  @Get()
  findAll(): Promise<CouponSubmission[]> {
    return this.couponSubmissionsService.findAll();
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    updateDto: { server?: string; nickname?: string; couponCode?: string },
  ) {
    return this.couponSubmissionsService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.couponSubmissionsService.remove(id);
  }
}
