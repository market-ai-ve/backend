import { Module } from '@nestjs/common';
import { ContentsController } from './http-api/v1/contents/createBuyerPerson/create-buyer-person.controller';

@Module({
  controllers: [ContentsController]
})
export class ContentsModule {}
