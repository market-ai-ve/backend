import { Test, TestingModule } from '@nestjs/testing';
import { FindAllAdToneController } from './find-all-ad-tone.controller';

describe('FindAllAdToneController', () => {
  let controller: FindAllAdToneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllAdToneController],
    }).compile();

    controller = module.get<FindAllAdToneController>(FindAllAdToneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
