import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuración de CORS
  const allowedOrigins = [
    process.env.FRONTEND_URL,
    process.env.FRONTEND_DEV_URL
  ].filter(Boolean); // Elimina valores undefined/null

  app.enableCors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Aplicación ejecutándose en el puerto ${port}`);
  console.log(`Modo: ${process.env.NODE_ENV}`);
  console.log(`Orígenes permitidos: ${allowedOrigins.join(', ')}`);
}
bootstrap();
