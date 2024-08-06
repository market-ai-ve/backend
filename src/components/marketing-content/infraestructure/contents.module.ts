import { Module } from '@nestjs/common';

// Use Case
import { CreateBuyerPersonCommandHandler } from './../application/use-cases/CreateBuyerPerson';
// Controller
import { ContentsController } from './http-api/v1/contents/createBuyerPerson/create-buyer-person.controller';
// Services
import { BuyerPersonAIServices } from '../domain/services/AI/buyer-person.ai';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [ContentsController],
  providers: [CreateBuyerPersonCommandHandler, BuyerPersonAIServices],
})
export class ContentsModule {}
