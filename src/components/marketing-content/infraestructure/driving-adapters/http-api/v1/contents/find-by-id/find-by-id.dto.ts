import { UUID } from 'crypto';

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

import { UUID_VERSION } from '@shared/contants';

export class FindToneById {
  @IsUUID(UUID_VERSION)
  @IsNotEmpty()
  @ApiProperty()
  readonly id!: UUID;
}
