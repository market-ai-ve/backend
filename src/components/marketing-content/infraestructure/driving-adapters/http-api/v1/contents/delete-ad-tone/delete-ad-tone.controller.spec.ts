import { Test, TestingModule } from '@nestjs/testing';
import { DeleteAdToneController } from './delete-ad-tone.controller';

describe('DeleteAdToneController', () => {
  let controller: DeleteAdToneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteAdToneController],
    }).compile();

    controller = module.get<DeleteAdToneController>(DeleteAdToneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
