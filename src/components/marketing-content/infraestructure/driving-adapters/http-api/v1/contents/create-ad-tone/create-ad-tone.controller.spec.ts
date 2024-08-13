import { Test, TestingModule } from '@nestjs/testing';

import { CreateAdToneCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone';
import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { InMemoryAdToneRepository } from '@/components/marketing-content/infraestructure/repositories';
import { ADTONE_REPOSITORY } from '@/components/shared/contants';

import { CreateAdToneController } from './create-ad-tone.controller';

describe('CreateAdToneController', () => {
  let controller: CreateAdToneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateAdToneController],
      providers: [
        CreateAdToneCommandHandler,
        InMemoryAdToneRepository,
        AdToneServiceSync,
        {
          provide: ADTONE_REPOSITORY,
          useClass: InMemoryAdToneRepository,
        },
      ],
    }).compile();

    controller = module.get<CreateAdToneController>(CreateAdToneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
