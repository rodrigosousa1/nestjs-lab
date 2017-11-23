import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { TransformInterceptor } from './interceptors/transform.interceptor';
import { AppModule } from './modules/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalInterceptors(new TransformInterceptor());
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix('api/v1');
    await app.listen(3000);
}

bootstrap();