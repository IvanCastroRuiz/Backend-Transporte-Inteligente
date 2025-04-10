import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouteModule } from './routes/routes.module'; 
import { TrafficModule } from './traffic/traffic.module';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [
            ConfigModule.forRoot({ isGlobal: true }), // habilita el uso de variables de entorno
            RouteModule, 
            TrafficModule, 
            AiModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
