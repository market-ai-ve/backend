import { Test, TestingModule } from '@nestjs/testing';

import { UpdateAdToneController } from './update-ad-tone.controller';

describe('UpdateAdToneController', () => {
  let controller: UpdateAdToneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateAdToneController],
    }).compile();

    controller = module.get<UpdateAdToneController>(UpdateAdToneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
