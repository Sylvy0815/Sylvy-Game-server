import { Test, TestingModule } from '@nestjs/testing';
import { NinokuniusersController } from './ninokuniusers.controller';

describe('NinokuniusersController', () => {
  let controller: NinokuniusersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NinokuniusersController],
    }).compile();

    controller = module.get<NinokuniusersController>(NinokuniusersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
