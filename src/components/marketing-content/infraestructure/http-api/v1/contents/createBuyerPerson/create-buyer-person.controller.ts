import { Body, Controller, Post } from '@nestjs/common';

import { CreateBuyerPersonCommandHandler } from './../../../../../application/use-cases/CreateBuyerPerson/create-buyer-person.commandHandler';
import { PROMPT_CREATE_BUYER_PERSON } from './../../../../prompts';
import { SDK_VERCEL_MODEL_GOOGLE } from './../../../../sdk/vercel-ai';
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
    // Descontructuon array with data model
    const [sdk, model] = SDK_VERCEL_MODEL_GOOGLE;

    // Instance Use Case << Create Buyer Person >>
    const useCase = this.createBuyerPersonCommandHandler;

    useCase.model = model;
    useCase.option = {};
    useCase.prompt = PROMPT_CREATE_BUYER_PERSON;

    const response = useCase.run(payload, sdk);

    return response;
  }
}
