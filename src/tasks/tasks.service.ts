// src/tasks/tasks.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { CouponSubmissionsService } from '../coupon-submission/coupon-submissions.service';
import { NinokuniUsersService } from '../ninokuniusers/ninokuniusers.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(
    private httpService: HttpService,
    private couponSubmissionsService: CouponSubmissionsService,
    private ninokuniUsersService: NinokuniUsersService,
  ) {}

  @Cron(CronExpression.EVERY_HOUR)
  async handleCron() {
    const users = await this.ninokuniUsersService.findAll();
    const couponSubmissions = await this.couponSubmissionsService.findAll();

    for (const user of users) {
      for (const submission of couponSubmissions) {
        const url = `https://coupon.netmarble.com/api/coupon/reward?gameCode=enn&couponCode=${submission.couponCode}&langCd=KO_KR&pid=${user.pid}`;
        try {
          const response = await lastValueFrom(this.httpService.get(url));
          this.logger.log(
            `Coupon code ${submission.couponCode} applied for PID ${user.pid}: ${response.data}`,
          );
        } catch (error) {
          this.logger.error(
            `Failed to apply coupon code ${submission.couponCode} for PID ${user.pid}: ${error.message}`,
          );
        }
      }
    }
  }
}
