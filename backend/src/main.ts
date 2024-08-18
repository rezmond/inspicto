import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import * as expressSession from 'express-session';
import * as passport from 'passport';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.use(
    expressSession({
      secret: 'SESSION_SECRET',
      resave: false,
      saveUninitialized: true, // For now it is true, but this solution should be re-considered in the future
      name: 'sessionId',
    }),
    // the method usage is correct here, it's just eslint's false positive error
    // eslint-disable-next-line import/namespace
    passport.session(),
  );
  await app.listen(3000);
}

bootstrap();
