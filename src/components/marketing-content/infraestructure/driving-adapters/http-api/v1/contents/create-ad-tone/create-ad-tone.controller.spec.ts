import { Test, TestingModule } from '@nestjs/testing';
import { CreateAdToneController } from './create-ad-tone.controller';

describe('CreateAdToneController', () => {
  let controller: CreateAdToneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateAdToneController],
    }).compile();

    controller = module.get<CreateAdToneController>(CreateAdToneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
