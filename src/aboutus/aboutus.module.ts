import { Module } from '@nestjs/common';
import { AboutusController } from './aboutus.controller';

@Module({
  controllers: [AboutusController]
})
export class AboutusModule {}
