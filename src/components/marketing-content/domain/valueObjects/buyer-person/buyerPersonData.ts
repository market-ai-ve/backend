import {
  ArrayNotEmpty,
  ArrayUnique,
  IsArray,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  validateSync,
} from 'class-validator';

import { VOValidationError } from '../../exceptions';

interface Value {
  companyName: string;
  companyDescription: string;
  dataSearch: string[];
}

export class BuyerPersonData {
  @IsNotEmpty()
  @IsString()
  public companyName: string;

  @IsNotEmpty()
  @IsString()
  public companyDescription: string;

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
  public dataSearch: string[];

  @IsOptional()
  public value?: Value;

  constructor(
    companyName: string,
    companyDescription: string,
    dataSearch: string[],
  ) {
    this.companyName = companyName;
    this.companyDescription = companyDescription;
    this.dataSearch = dataSearch;

    this.validate();
    this.value = {
      companyName,
      companyDescription,
      dataSearch,
    };
  }

  validate() {
    const errors = validateSync(this);

    if (errors.length > 0) {
      throw new VOValidationError(errors);
    }
  }

  equals(other: BuyerPersonData) {
    return (
      this.companyName === other.companyName &&
      this.companyDescription === other.companyDescription &&
      this.dataSearch === other.dataSearch
    );
  }
}
