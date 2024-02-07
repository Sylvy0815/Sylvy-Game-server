import { Test, TestingModule } from '@nestjs/testing';
import { NinokuniusersService } from './ninokuniusers.service';

describe('NinokuniusersService', () => {
  let service: NinokuniusersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NinokuniusersService],
    }).compile();

    service = module.get<NinokuniusersService>(NinokuniusersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
