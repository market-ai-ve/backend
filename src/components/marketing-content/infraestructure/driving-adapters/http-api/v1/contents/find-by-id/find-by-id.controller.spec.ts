import { Test, TestingModule } from '@nestjs/testing';

import { FindOneAdTonesCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone/FindOneAdTone';
import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { InMemoryAdToneRepository } from '@/components/marketing-content/infraestructure/repositories';
import { ADTONE_REPOSITORY } from '@/components/shared/contants';

import { FindByIdController } from './find-by-id.controller';

describe('FindByIdController', () => {
  let controller: FindByIdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindByIdController],
      providers: [
        FindOneAdTonesCommandHandler,
        InMemoryAdToneRepository,
        AdToneServiceSync,
        {
          provide: ADTONE_REPOSITORY,
          useClass: InMemoryAdToneRepository,
        },
      ],
    }).compile();

    controller = module.get<FindByIdController>(FindByIdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
