import { Test, TestingModule } from '@nestjs/testing';

import { UpdateAdToneCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone/UpdateAdTone/update-ad-tones.commandHandler';
import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { InMemoryAdToneRepository } from '@/components/marketing-content/infraestructure/repositories';
import { ADTONE_REPOSITORY } from '@/components/shared/contants';

import { UpdateAdToneController } from './update-ad-tone.controller';

describe('UpdateAdToneController', () => {
  let controller: UpdateAdToneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateAdToneController],
      providers: [
        UpdateAdToneCommandHandler,
        InMemoryAdToneRepository,
        AdToneServiceSync,
        {
          provide: ADTONE_REPOSITORY,
          useClass: InMemoryAdToneRepository,
        },
      ],
    }).compile();

    controller = module.get<UpdateAdToneController>(UpdateAdToneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
