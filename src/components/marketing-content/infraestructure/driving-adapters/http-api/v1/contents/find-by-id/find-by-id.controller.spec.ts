import { Test, TestingModule } from '@nestjs/testing';
import { FindByIdController } from './find-by-id.controller';

describe('FindByIdController', () => {
  let controller: FindByIdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindByIdController],
    }).compile();

    controller = module.get<FindByIdController>(FindByIdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
