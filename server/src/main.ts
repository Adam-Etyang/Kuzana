import {config} from 'dotenv';
config();
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
                                      bodyParser: false,});
  const config = new DocumentBuilder()
    .setTitle('Mentor-Mentee API')
    .setDescription('The Mentor-Mentee API description')
    .setVersion('1.0')
    .addTag('mentor-mentee')
    .build();
  const documentFactory = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
