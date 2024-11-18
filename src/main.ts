import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:4999',
      'https://port-0-daon-back-m3l3qxtx577e38d3.sel4.cloudtype.app/'
    ],
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 4999);
}
bootstrap();
