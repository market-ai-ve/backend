import { UUID } from 'node:crypto';

import { Body, Controller, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UpdateAdToneCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone';
import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { InMemoryAdToneRepository } from '@/components/marketing-content/infraestructure/repositories';
import { MODULE_CONTENTS } from '@/components/shared/contants';
import { BaseUrl, UrlBackend } from '@/components/shared/pathsUrl';

import { UpdateAdToneDTO } from './update-ad-tone.dto';

@ApiTags(MODULE_CONTENTS)
@Controller(BaseUrl.V1_MO_CONTENTS)
export class UpdateAdToneController {
  constructor(
    private readonly useCase: UpdateAdToneCommandHandler = new UpdateAdToneCommandHandler(
      new AdToneServiceSync(new InMemoryAdToneRepository()),
    ),
  ) {}

  @Patch(UrlBackend.createAdTone + '/:id')
  updateAdTone(@Param('id') id: UUID, @Body() params: UpdateAdToneDTO) {
    return this.useCase.run(id, params);
  }
}
