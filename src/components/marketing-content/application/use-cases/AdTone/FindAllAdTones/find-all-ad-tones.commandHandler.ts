import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { Injectable } from '@/components/shared/dependecy-injection/injectable';

@Injectable()
export class FindAllAdTonesCommandHandler {
  constructor(private service: AdToneServiceSync) {}

  run() {
    return this.service.findAll();
  }
}
