import { UUID } from 'crypto';

import { Body, Controller, Param, Patch } from '@nestjs/common';

import { UpdateAdToneCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone/UpdateAdTone/update-ad-tones.commandHandler';
import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { InMemoryAdToneRepository } from '@/components/marketing-content/infraestructure/repositories';

import { UpdateAdToneDTO } from './update-ad-tone.dto';

@Controller('update-ad-tone')
export class UpdateAdToneController {
  constructor(
    private readonly useCase: UpdateAdToneCommandHandler = new UpdateAdToneCommandHandler(
      new AdToneServiceSync(new InMemoryAdToneRepository()),
    ),
  ) {}

  @Patch(':id')
  updateAdTone(@Param('id') id: UUID, @Body() params: UpdateAdToneDTO) {
    return this.useCase.run(id, params);
  }
}
