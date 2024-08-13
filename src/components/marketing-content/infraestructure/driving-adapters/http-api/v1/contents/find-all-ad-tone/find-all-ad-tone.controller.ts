import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { FindAllAdTonesCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone';
import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { InMemoryAdToneRepository } from '@/components/marketing-content/infraestructure/repositories';
import { MODULE_CONTENTS } from '@/components/shared/contants';
import { BaseUrl, UrlBackend } from '@/components/shared/pathsUrl';

@ApiTags(MODULE_CONTENTS)
@Controller(BaseUrl.V1_MO_CONTENTS)
export class FindAllAdToneController {
  constructor(
    private readonly useCase: FindAllAdTonesCommandHandler = new FindAllAdTonesCommandHandler(
      new AdToneServiceSync(new InMemoryAdToneRepository()),
    ),
  ) {}

  @Get(UrlBackend.createAdTone)
  findAllAdTone() {
    return this.useCase.run();
  }
}
