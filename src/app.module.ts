import { Module } from '@nestjs/common';

import { ContentsModule } from './components/marketing-content/infraestructure/contents.module';

@Module({
  imports: [ContentsModule],
})
export class AppModule {}
