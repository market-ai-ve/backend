import { Controller, Get } from '@nestjs/common';

import { FindAllAdTonesCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone/FindAllAdTones';
import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { InMemoryAdToneRepository } from '@/components/marketing-content/infraestructure/repositories';

@Controller('find-all-ad-tone')
export class FindAllAdToneController {
  constructor(
    private readonly useCase: FindAllAdTonesCommandHandler = new FindAllAdTonesCommandHandler(
      new AdToneServiceSync(new InMemoryAdToneRepository()),
    ),
  ) {}

  @Get()
  findAllAdTone() {
    return this.useCase.run();
  }
}
