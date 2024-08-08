import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  ArrayUnique,
  IsArray,
  IsIn,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateBuyerPersonDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly companyName!: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly companyDescription!: string;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsIn(
    [
      'Genero',
      'Edad',
      'Ubicacion',
      'Estado Civil',
      'Trabajo',
      'Intereses',
      'Comportamientos',
      'Historial web',
    ],
    { each: true },
  )
  @ApiProperty()
  readonly dataSearch!: Array<string>;
}
