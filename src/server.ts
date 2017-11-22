import { ValidationPipe } from './validation/validation.pipe';
import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';

import { TransformInterceptor } from './interceptors/transform.interceptor';
import { AppModule } from './modules/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(bodyParser.json());
    app.useGlobalInterceptors(new TransformInterceptor());
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix('api/v1');
    await app.listen(3000);
}

bootstrap();