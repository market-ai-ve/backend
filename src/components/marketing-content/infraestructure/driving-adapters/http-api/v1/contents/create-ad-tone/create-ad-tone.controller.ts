import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateAdToneCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone';
import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { InMemoryAdToneRepository } from '@/components/marketing-content/infraestructure/repositories';
import { MODULE_CONTENTS } from '@/components/shared/contants';
import { BaseUrl, UrlBackend } from '@/components/shared/pathsUrl';

import { CreateAdToneDTO } from './create-ad-tone.dto';

@ApiTags(MODULE_CONTENTS)
@Controller(BaseUrl.V1_MO_CONTENTS)
export class CreateAdToneController {
  constructor(
    private readonly useCase: CreateAdToneCommandHandler = new CreateAdToneCommandHandler(
      new AdToneServiceSync(new InMemoryAdToneRepository()),
    ),
  ) {}

  @Post(UrlBackend.createAdTone)
  createAdTone(@Body() params: CreateAdToneDTO) {
    return this.useCase.run(params);
  }
}
