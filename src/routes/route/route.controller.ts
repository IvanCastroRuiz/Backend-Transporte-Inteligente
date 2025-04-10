import { Controller, Get, Query } from '@nestjs/common';
import { RouteService } from './route.service';

@Controller('routes')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Get('optimize')
  async optimizeRoute(@Query('origin') origin: string, @Query('destinations') destinations: string) {
    const destinationList = destinations.split(',');
    return this.routeService.optimizeRoute(origin, destinationList);
  }
}
