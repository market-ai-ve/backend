import { Module } from '@nestjs/common';

// Use Case
import { CreateBuyerPersonCommandHandler } from './../application/use-cases/CreateBuyerPerson';
// Controller
import { ContentsController } from './http-api/v1/contents/createBuyerPerson/create-buyer-person.controller';
// Services
import { BuyerPersonAIServices } from '../domain/services/AI/buyer-person.ai';

@Module({
  controllers: [ContentsController],
  providers: [CreateBuyerPersonCommandHandler, BuyerPersonAIServices],
})
export class ContentsModule {}
