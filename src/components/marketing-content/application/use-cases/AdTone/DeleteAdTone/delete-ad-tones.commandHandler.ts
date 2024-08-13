import { UUID } from 'node:crypto';

import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { Injectable } from '@/components/shared/dependecy-injection/injectable';

@Injectable()
export class DeleteAdToneCommandHandler {
  constructor(private service: AdToneServiceSync) {}

  run(id: UUID) {
    return this.service.delete(id);
  }
}
