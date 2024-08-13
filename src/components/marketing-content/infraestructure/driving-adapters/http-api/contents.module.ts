import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CreateAdToneCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone/CreateAdTone';
import { DeleteAdToneCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone/DeleteAdTone/delete-ad-tones.commandHandler';
import { FindAllAdTonesCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone/FindAllAdTones';
import { FindOneAdTonesCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone/FindOneAdTone';
import { UpdateAdToneCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone/UpdateAdTone/update-ad-tones.commandHandler';
import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { ADTONE_REPOSITORY } from '@/components/shared/contants';

import { CreateAdToneController } from './v1/contents/create-ad-tone/create-ad-tone.controller';
import { ContentsController } from './v1/contents/createBuyerPerson/create-buyer-person.controller';
import { DeleteAdToneController } from './v1/contents/delete-ad-tone/delete-ad-tone.controller';
import { FindAllAdToneController } from './v1/contents/find-all-ad-tone/find-all-ad-tone.controller';
import { FindByIdController } from './v1/contents/find-by-id/find-by-id.controller';
import { UpdateAdToneController } from './v1/contents/update-ad-tone/update-ad-tone.controller';
import { CreateBuyerPersonCommandHandler } from '../../../application/use-cases/CreateBuyerPerson';
import { BuyerPersonAIServices } from '../../../domain/services/AI/buyer-person.ai';
import { InMemoryAdToneRepository } from '../../repositories';

@Module({
  imports: [ConfigModule],
  controllers: [
    ContentsController,
    FindAllAdToneController,
    CreateAdToneController,
    FindByIdController,
    UpdateAdToneController,
    DeleteAdToneController,
  ],
  providers: [
    // Use Cases
    CreateBuyerPersonCommandHandler,
    CreateAdToneCommandHandler,
    FindOneAdTonesCommandHandler,
    FindAllAdTonesCommandHandler,
    UpdateAdToneCommandHandler,
    DeleteAdToneCommandHandler,
    // Services
    BuyerPersonAIServices,
    AdToneServiceSync,
    // Persistence
    InMemoryAdToneRepository,
    {
      provide: ADTONE_REPOSITORY,
      useClass: InMemoryAdToneRepository,
    },
  ],
})
export class ContentsModule {}
