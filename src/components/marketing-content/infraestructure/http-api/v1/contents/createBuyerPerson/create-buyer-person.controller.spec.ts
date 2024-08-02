import { Test, TestingModule } from '@nestjs/testing';
import { ContentsController } from './create-buyer-person.controller';

describe('ContentsController', () => {
  let controller: ContentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContentsController],
    }).compile();

    controller = module.get<ContentsController>(ContentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined method POST create buyer', () => {
    expect(controller.createBuyer).toBeDefined();
  });
});
