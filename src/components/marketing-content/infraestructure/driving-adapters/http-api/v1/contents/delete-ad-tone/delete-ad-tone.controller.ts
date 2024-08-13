import { UUID } from 'node:crypto';

import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { DeleteAdToneCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone';
import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { InMemoryAdToneRepository } from '@/components/marketing-content/infraestructure/repositories';
import { MODULE_CONTENTS } from '@/components/shared/contants';
import { BaseUrl, UrlBackend } from '@/components/shared/pathsUrl';

@ApiTags(MODULE_CONTENTS)
@Controller(BaseUrl.V1_MO_CONTENTS)
export class DeleteAdToneController {
  constructor(
    private readonly useCase: DeleteAdToneCommandHandler = new DeleteAdToneCommandHandler(
      new AdToneServiceSync(new InMemoryAdToneRepository()),
    ),
  ) {}

  @Delete(UrlBackend.createAdTone + '/:id')
  deleteAdTone(@Param('id') id: UUID) {
    return this.useCase.run(id);
  }
}
