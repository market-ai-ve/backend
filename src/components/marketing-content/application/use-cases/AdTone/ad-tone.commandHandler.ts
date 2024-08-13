import { IUpdateAdTone } from '@/components/marketing-content/domain/interfaces/IAdTone';
import { AdToneServiceSync } from '@/components/marketing-content/domain/services';
import { Injectable } from '@/components/shared/dependecy-injection/injectable';

import { ICreateAdToneDTO, ParamsGetDTO } from './ad-tone.commandHandler.dto';

// Create ad tone
@Injectable()
export class CreateAdToneCommandHandler {
  constructor(private service: AdToneServiceSync) {}

  run(dto: ICreateAdToneDTO) {
    return this.service.create(dto);
  }
}

// Find all ad tone
@Injectable()
export class FindAllAdTonesCommandHandler {
  constructor(private service: AdToneServiceSync) {}

  run() {
    return this.service.findAll();
  }
}

// Find one ad tone
@Injectable()
export class FindOneAdTonesCommandHandler {
  constructor(private service: AdToneServiceSync) {}

  run(params: ParamsGetDTO) {
    const { id } = params;
    return this.service.findById(id);
  }
}

// Update ad tone
@Injectable()
export class UpdateAdToneCommandHandler {
  constructor(private service: AdToneServiceSync) {}

  run(id: ParamsGetDTO['id'], changes: IUpdateAdTone) {
    return this.service.update(id, changes);
  }
}

// Delete ad tone
@Injectable()
export class DeleteAdToneCommandHandler {
  constructor(private service: AdToneServiceSync) {}

  run(id: ParamsGetDTO['id']) {
    return this.service.delete(id);
  }
}
