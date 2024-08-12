import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { Injectable } from '@/components/shared/dependecy-injection/injectable';

import { ICreateAdToneDTO } from './create-ad-tone.commandHandler.dto';

@Injectable()
export class CreateAdToneCommandHandler {
  constructor(private service: AdToneServiceSync) {}

  run(dto: ICreateAdToneDTO) {
    return this.service.create(dto);
  }
}
