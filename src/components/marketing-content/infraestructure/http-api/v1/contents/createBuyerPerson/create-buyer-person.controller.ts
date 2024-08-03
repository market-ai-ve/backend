import { google } from '@ai-sdk/google';
import { Body, Controller, Post } from '@nestjs/common';
import { generateText } from 'ai';

// import { IReturnCreatePerson } from 'src/components/marketing-content/domain/interfaces';

import { CreateBuyerPersonCommandHandler } from './../../../../../application/use-cases/CreateBuyerPerson/create-buyer-person.commandHandler';
import { CreateBuyerPersonDto } from './create-buyer-person.dto';
import { CREATE_BUYER_PERSON, V1_CONTENTS } from '../../../route.constants';

@Controller(V1_CONTENTS)
export class ContentsController {
  constructor(
    private readonly createBuyerPersonCommandHandler: CreateBuyerPersonCommandHandler,
  ) {}

  @Post(CREATE_BUYER_PERSON)
  async createBuyer(
    @Body() payload: CreateBuyerPersonDto,
  ): Promise<{ terms: string[] }> {
    // Instance Use Case << Create Buyer Person >>
    const useCase = this.createBuyerPersonCommandHandler;

    useCase.model = google('');
    useCase.option = {};
    useCase.prompt = 'Test';

    const response = useCase.run(payload, generateText);

    return response;
  }
}
