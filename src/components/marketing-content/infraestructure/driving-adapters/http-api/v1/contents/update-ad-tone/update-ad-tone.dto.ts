import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateAdToneDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly tone!: string;
}
