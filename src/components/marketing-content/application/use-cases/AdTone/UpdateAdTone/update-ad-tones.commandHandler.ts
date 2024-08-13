import { UUID } from 'node:crypto';

import { IUpdateAdTone } from '@/components/marketing-content/domain/interfaces/IAdTone';
import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { Injectable } from '@/components/shared/dependecy-injection/injectable';

@Injectable()
export class UpdateAdToneCommandHandler {
  constructor(private service: AdToneServiceSync) {}

  run(id: UUID, changes: IUpdateAdTone) {
    return this.service.update(id, changes);
  }
}
