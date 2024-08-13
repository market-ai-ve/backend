import { UUID } from 'crypto';

import { Controller, Delete, Param } from '@nestjs/common';

import { DeleteAdToneCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone/DeleteAdTone/delete-ad-tones.commandHandler';
import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { InMemoryAdToneRepository } from '@/components/marketing-content/infraestructure/repositories';

@Controller('delete-ad-tone')
export class DeleteAdToneController {
  constructor(
    private readonly useCase: DeleteAdToneCommandHandler = new DeleteAdToneCommandHandler(
      new AdToneServiceSync(new InMemoryAdToneRepository()),
    ),
  ) {}

  @Delete(':id')
  deleteAdTone(@Param('id') id: UUID) {
    return this.useCase.run(id);
  }
}
