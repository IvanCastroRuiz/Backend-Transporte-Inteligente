import { Injectable } from '@nestjs/common';

@Injectable()
export class AiService {
  optimizeByTraffic(origin: string, destinations: string[], trafficData: { destination: string; delay: number }[]) {
    return trafficData.sort((a, b) => a.delay - b.delay).map(d => d.destination);
  }
}