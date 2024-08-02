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
  readonly companyName: string;

  @IsNotEmpty()
  @IsString()
  readonly companyDescription: string;

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
  readonly dataSearch: Array<string>;
}
