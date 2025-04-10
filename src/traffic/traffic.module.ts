import { Module } from '@nestjs/common';
import { TrafficService } from './traffic.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [TrafficService],
  exports: [TrafficService],
})
export class TrafficModule {}
