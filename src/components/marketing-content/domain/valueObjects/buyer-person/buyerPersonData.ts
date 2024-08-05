import {
  ArrayNotEmpty,
  ArrayUnique,
  IsArray,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  validateOrReject,
} from 'class-validator';

import { VOValidationError } from '../../exception/VOValidationError';

interface Value {
  companyName: string;
  companyDescription: string;
  dataSearch: string[];
}

export class BuyerPersonData {
  @IsNotEmpty()
  @IsString()
  public companyName!: string;

  @IsNotEmpty()
  @IsString()
  public companyDescription!: string;

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
  public dataSearch!: string[];

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
    this.value = {
      companyName,
      companyDescription,
      dataSearch,
    };
  }

  async validate(instance: BuyerPersonData) {
    await validateOrReject(instance, {
      whitelist: true,
      forbidNonWhitelisted: true,
      validationError: { target: false, value: false },
    })
      .then(() => true)
      .catch((error) => {
        throw new VOValidationError(error);
      });
  }

  equals(other: BuyerPersonData) {
    return (
      this.companyName === other.companyName &&
      this.companyDescription === other.companyDescription &&
      this.dataSearch === other.dataSearch
    );
  }
}
