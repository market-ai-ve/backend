import { Body, Controller, Post } from '@nestjs/common';

import { CreateAdToneCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone';
import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { InMemoryAdToneRepository } from '@/components/marketing-content/infraestructure/repositories';

import { CreateAdToneDTO } from './create-ad-tone.dto';

@Controller('create-ad-tone')
export class CreateAdToneController {
  constructor(
    private readonly useCase: CreateAdToneCommandHandler = new CreateAdToneCommandHandler(
      new AdToneServiceSync(new InMemoryAdToneRepository()),
    ),
  ) {}

  @Post()
  createAdTone(@Body() params: CreateAdToneDTO) {
    return this.useCase.run(params);
  }
}
