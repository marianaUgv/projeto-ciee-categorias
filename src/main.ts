import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  const config = new DocumentBuilder()
    .setTitle('Skrilla')
    .setDescription('Documentação oficial do Skrilla')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log('Aplicação rodando em: http://localhost:3000');
  console.log('Swagger disponível em: http://localhost:3000/api');
}
bootstrap();
