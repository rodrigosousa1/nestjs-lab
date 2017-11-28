import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as passport from 'passport';

import { AppModule } from './modules/app.module';

const configureHeaders = (req, res, next) => {
    res.removeHeader('X-Powered-By');
    res.set('X-Content-Type-Options', 'nosniff');
    res.set('X-Frame-Options', 'deny');
    res.set('Content-Security-Policy', 'default-src "none"');
    res.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
};

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix('api/v1');

    app.use(configureHeaders);
    app.use(passport.initialize());
    app.use(passport.session());

    await app.listen(3000);
}

bootstrap();