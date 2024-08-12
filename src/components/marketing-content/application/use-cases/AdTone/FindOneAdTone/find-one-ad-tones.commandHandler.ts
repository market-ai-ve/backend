import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { Injectable } from '@/components/shared/dependecy-injection/injectable';

import { findIdDto } from './find-one-ad-tones.dto';

@Injectable()
export class FindOneAdTonesCommandHandler {
  constructor(private service: AdToneServiceSync) {}

  run(params: findIdDto) {
    const { id } = params;
    return this.service.findById(id);
  }
}
