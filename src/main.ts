import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { SwaggerDoc } from './docs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Docs
  const swagger = new SwaggerDoc();
  swagger.path = 'api/docs';
  swagger.app = app;

  swagger.config();

  // Listening app
  await app.listen(3000);
}
bootstrap();
