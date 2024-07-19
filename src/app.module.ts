import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MembersModule } from './members/members.module';
import { EnsayosModule } from './ensayos/ensayos.module';
import { EventosModule } from './eventos/eventos.module';
import { RepertorioModule } from './repertorios/repertorios.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URL'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      renderPath: '/', // Establece la ruta de renderizado para servir index.html como la página principal
    }),
    MembersModule,
    EnsayosModule,
    EventosModule,
    RepertorioModule,
  ],
})
export class AppModule {}
