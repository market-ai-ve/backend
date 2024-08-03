import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export class SwaggerDoc {
  private PATH: string = 'api';
  private APP: INestApplication;

  // Getters

  get path(): string {
    return this.PATH;
  }

  // Setters

  set path(v: string) {
    this.PATH = v;
  }
  set app(v: INestApplication<any>) {
    this.APP = v;
  }

  config() {
    const config = new DocumentBuilder()
      .setTitle('Market AI API')
      .setDescription('The API market AI')
      .setVersion('0.0.1')
      .build();
    const document = SwaggerModule.createDocument(this.APP, config);
    return SwaggerModule.setup(this.PATH, this.APP, document);
  }
}
