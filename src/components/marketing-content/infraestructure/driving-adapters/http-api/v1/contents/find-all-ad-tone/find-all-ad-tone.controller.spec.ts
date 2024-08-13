import { Test, TestingModule } from '@nestjs/testing';

import { FindAllAdTonesCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone';
import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { InMemoryAdToneRepository } from '@/components/marketing-content/infraestructure/repositories';
import { ADTONE_REPOSITORY } from '@/components/shared/contants';

import { FindAllAdToneController } from './find-all-ad-tone.controller';

describe('FindAllAdToneController', () => {
  let controller: FindAllAdToneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllAdToneController],
      providers: [
        FindAllAdTonesCommandHandler,
        InMemoryAdToneRepository,
        AdToneServiceSync,
        {
          provide: ADTONE_REPOSITORY,
          useClass: InMemoryAdToneRepository,
        },
      ],
    }).compile();

    controller = module.get<FindAllAdToneController>(FindAllAdToneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
