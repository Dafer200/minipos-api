import { Controller, Get } from '@nestjs/common';

@Controller('health') // Define la ruta base /health [cite: 116]
export class HealthController {
  
  @Get() // Define el método GET [cite: 118]
  check() {
    return {
      status: 'ok',
      message: 'API funcionando correctamente',
      timestamp: new Date().toISOString(),
    }; // Devuelve la respuesta en formato JSON [cite: 120, 124]
  }
}