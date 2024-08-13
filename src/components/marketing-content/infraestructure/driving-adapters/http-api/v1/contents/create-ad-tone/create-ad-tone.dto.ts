import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import { ICreateAdTone } from '@/components/marketing-content/domain/interfaces/IAdTone';

export class CreateAdToneDTO implements ICreateAdTone {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly tone!: string;
}
