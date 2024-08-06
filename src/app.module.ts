import { Module } from '@nestjs/common';

import { ContentsModule } from './components/marketing-content/infraestructure/contents.module';
import { ConfigModule } from '@nestjs/config';

import config from "./config";
import * as Joi from 'joi';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env', '.env.local', '.env.development', '.env.production'],
    load: [config],
    isGlobal: true,
    validationSchema: Joi.object({
      GOOGLE_GENERATIVE_AI_API_KEY: Joi.string().required(),
      // Agrega otras variables de entorno que se necesiten validar
    }),
  }), ContentsModule],
})
export class AppModule {}
