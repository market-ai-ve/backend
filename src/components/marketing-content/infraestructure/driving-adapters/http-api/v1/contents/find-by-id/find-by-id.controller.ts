import { Controller, Get, Param } from '@nestjs/common';

import { FindOneAdTonesCommandHandler } from '@/components/marketing-content/application/use-cases/AdTone/FindOneAdTone';
import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { InMemoryAdToneRepository } from '@/components/marketing-content/infraestructure/repositories';

import { FindToneById } from './find-by-id.dto';

@Controller('find-by-id')
export class FindByIdController {
  constructor(
    private readonly useCase: FindOneAdTonesCommandHandler = new FindOneAdTonesCommandHandler(
      new AdToneServiceSync(new InMemoryAdToneRepository()),
    ),
  ) {}

  @Get('/:id')
  findAllAdTone(@Param() params: FindToneById) {
    return this.useCase.run(params);
  }
}
