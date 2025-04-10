import { Module } from '@nestjs/common';
import { RouteController } from '../routes/route/route.controller';
import { RouteService } from '../routes/route/route.service';
import { AiModule } from '../ai/ai.module';
import { TrafficModule } from '../traffic/traffic.module';

@Module({
  controllers: [RouteController],
  providers: [RouteService],
  imports: [AiModule, TrafficModule],
})
export class RouteModule {}
