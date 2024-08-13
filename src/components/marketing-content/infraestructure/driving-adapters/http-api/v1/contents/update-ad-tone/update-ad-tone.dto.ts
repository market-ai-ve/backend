import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import { IUpdateAdTone } from '@/components/marketing-content/domain/interfaces/IAdTone';

export class UpdateAdToneDTO implements IUpdateAdTone {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly tone!: string;
}
