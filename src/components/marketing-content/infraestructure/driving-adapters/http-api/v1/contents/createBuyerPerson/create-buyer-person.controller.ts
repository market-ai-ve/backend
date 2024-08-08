import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateBuyerPersonCommandHandler } from '@/components/marketing-content/application/use-cases/CreateBuyerPerson';
import { BuyerPersonAIServices } from '@/components/marketing-content/domain/services/AI/buyer-person.ai';
import { PROMPT_CREATE_BUYER_PERSON } from '@/components/marketing-content/infraestructure/prompts';
import { SDK_VERCEL_MODEL_GOOGLE } from '@/components/marketing-content/infraestructure/sdk/vercel-ai';
import { MODULE_CONTENTS } from '@shared/contants';
import { BaseUrl, UrlBackend } from '@shared/pathsUrl';

import { CreateBuyerPersonDto } from './create-buyer-person.dto';
import { SwaggerDoc } from './documentation';

@ApiTags(MODULE_CONTENTS)
@Controller(BaseUrl.V1_MO_CONTENTS)
export class ContentsController {
  constructor(
    private readonly createBuyerPersonCommandHandler: CreateBuyerPersonCommandHandler = new CreateBuyerPersonCommandHandler(
      new BuyerPersonAIServices(),
    ),
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
