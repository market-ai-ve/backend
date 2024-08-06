import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MODULE_CONTENTS } from '@shared/contants';
import { BaseUrl, UrlBackend } from '@shared/pathsUrl';

import { CreateBuyerPersonCommandHandler } from './../../../../../application/use-cases/CreateBuyerPerson/create-buyer-person.commandHandler';
import { PROMPT_CREATE_BUYER_PERSON } from './../../../../prompts';
import { SDK_VERCEL_MODEL_GOOGLE } from './../../../../sdk/vercel-ai';
import { CreateBuyerPersonDto } from './create-buyer-person.dto';
import { SwaggerDoc } from './documentation';

@ApiTags(MODULE_CONTENTS)
@Controller(BaseUrl.V1_MO_CONTENTS)
export class ContentsController {
  constructor(
    private readonly createBuyerPersonCommandHandler: CreateBuyerPersonCommandHandler,
  ) {}

  @Post(UrlBackend.createBuyerPerson)
  @SwaggerDoc.getDoc()
  async createBuyerPerson(
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
