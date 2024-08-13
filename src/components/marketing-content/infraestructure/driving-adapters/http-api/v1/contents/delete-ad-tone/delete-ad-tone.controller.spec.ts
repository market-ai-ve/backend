import { Test, TestingModule } from '@nestjs/testing';

import { DeleteAdToneCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone';
import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { InMemoryAdToneRepository } from '@/components/marketing-content/infraestructure/repositories';
import { ADTONE_REPOSITORY } from '@/components/shared/contants';

import { DeleteAdToneController } from './delete-ad-tone.controller';

describe('DeleteAdToneController', () => {
  let controller: DeleteAdToneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteAdToneController],
      providers: [
        DeleteAdToneCommandHandler,
        InMemoryAdToneRepository,
        AdToneServiceSync,
        {
          provide: ADTONE_REPOSITORY,
          useClass: InMemoryAdToneRepository,
        },
      ],
    }).compile();

    controller = module.get<DeleteAdToneController>(DeleteAdToneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
