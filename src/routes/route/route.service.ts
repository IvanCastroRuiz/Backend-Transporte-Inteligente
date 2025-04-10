import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AiService } from '../../ai/ai.service';
import { TrafficService } from '../../traffic/traffic.service';

@Injectable()
export class RouteService {
  constructor(
    private readonly aiService: AiService,
    private readonly trafficService: TrafficService,
    private readonly configService: ConfigService,
  ) {}

  async optimizeRoute(origin: string, destinations: string[]) {
    const trafficData = await this.trafficService.getTrafficData(origin, destinations);
    const optimized = this.aiService.optimizeByTraffic(origin, destinations, trafficData);
    const apiKey = this.configService.get<string>('GOOGLE_MAPS_API_KEY');
    const destination = encodeURIComponent(optimized[optimized.length - 1]);
    const waypoints = encodeURIComponent(optimized.slice(0, -1).join('|'));
    const originEncoded = encodeURIComponent(origin);
    const mapUrl = `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=${originEncoded}&destination=${destination}&waypoints=${waypoints}`;
    return { origin, optimized, trafficData, mapUrl };
  }
}
