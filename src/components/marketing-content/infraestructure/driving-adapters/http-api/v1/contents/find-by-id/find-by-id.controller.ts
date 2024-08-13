import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { FindOneAdTonesCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone';
import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { InMemoryAdToneRepository } from '@/components/marketing-content/infraestructure/repositories';
import { MODULE_CONTENTS } from '@/components/shared/contants';
import { BaseUrl, UrlBackend } from '@/components/shared/pathsUrl';

import { FindToneById } from './find-by-id.dto';

@ApiTags(MODULE_CONTENTS)
@Controller(BaseUrl.V1_MO_CONTENTS)
export class FindByIdController {
  constructor(
    private readonly useCase: FindOneAdTonesCommandHandler = new FindOneAdTonesCommandHandler(
      new AdToneServiceSync(new InMemoryAdToneRepository()),
    ),
  ) {}

  @Get(UrlBackend.createAdTone + '/:id')
  findAllAdTone(@Param('id') id: FindToneById) {
    return this.useCase.run(id);
  }
}
