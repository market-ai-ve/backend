import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ContentsModule } from './components/marketing-content/infraestructure/contents.module';

@Module({
  imports: [ContentsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
