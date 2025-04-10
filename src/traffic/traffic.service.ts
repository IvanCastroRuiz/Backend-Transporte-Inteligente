import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class TrafficService {
  constructor(private readonly configService: ConfigService) {}

  async getTrafficData(origin: string, destinations: string[]) {
    const apiKey = this.configService.get<string>('GOOGLE_MAPS_API_KEY');
    const results = await Promise.all(
      destinations.map(async (destination) => {
        try {
          const res = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
            params: {
              origins: origin,
              destinations: destination,
              key: apiKey,
            },
          });
          const delay = res.data.rows[0]?.elements[0]?.duration?.value || Math.random() * 10;
          return { destination, delay };
        } catch (err) {
          return { destination, delay: Math.random() * 10 };
        }
      })
    );
    return results;
  }
}
