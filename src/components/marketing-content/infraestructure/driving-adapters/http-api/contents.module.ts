import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CreateAdToneCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone/CreateAdTone';
import { FindAllAdTonesCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone/FindAllAdTones';
import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { ADTONE_REPOSITORY } from '@/components/shared/contants';

import { CreateAdToneController } from './v1/contents/create-ad-tone/create-ad-tone.controller';
import { ContentsController } from './v1/contents/createBuyerPerson/create-buyer-person.controller';
import { FindAllAdToneController } from './v1/contents/find-all-ad-tone/find-all-ad-tone.controller';
import { CreateBuyerPersonCommandHandler } from '../../../application/use-cases/CreateBuyerPerson';
import { BuyerPersonAIServices } from '../../../domain/services/AI/buyer-person.ai';
import { InMemoryAdToneRepository } from '../../repositories';

@Module({
  imports: [ConfigModule],
  controllers: [
    ContentsController,
    FindAllAdToneController,
    CreateAdToneController,
  ],
  providers: [
    CreateBuyerPersonCommandHandler,
    CreateAdToneCommandHandler,
    FindAllAdTonesCommandHandler,
    BuyerPersonAIServices,
    InMemoryAdToneRepository,
    {
      provide: ADTONE_REPOSITORY,
      useClass: InMemoryAdToneRepository,
    },
    AdToneServiceSync,
  ],
})
export class ContentsModule {}
