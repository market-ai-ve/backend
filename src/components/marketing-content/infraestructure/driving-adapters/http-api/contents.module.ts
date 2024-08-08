import { Module } from '@nestjs/common';
// Use Case
import { ConfigModule } from '@nestjs/config';

import { ContentsController } from './v1/contents/createBuyerPerson/create-buyer-person.controller';
import { CreateBuyerPersonCommandHandler } from '../../../application/use-cases/CreateBuyerPerson';
import { BuyerPersonAIServices } from '../../../domain/services/AI/buyer-person.ai';

@Module({
  imports: [ConfigModule],
  controllers: [ContentsController],
  providers: [CreateBuyerPersonCommandHandler, BuyerPersonAIServices],
})
export class ContentsModule {}
