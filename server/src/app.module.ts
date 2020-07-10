import { join } from 'path';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { BlogSchema } from './data-access/mongo-schema';
import { BlogPostsService } from './blog-posts/blog-posts.service';
import { BlogPostsController } from './blog-posts/blog-posts.controller';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://showcase.mongo.cosmos.azure.com:10255/showcase?ssl=true", {
      auth: {
        user: 'showcase',
        password: 'nmheirkYTHtsoe1adZNLeOEsD1ZJUFQtZyjd0tLcUWrgzgByq03bOBzKWdJsPNbPrZT3V7qaCkv601i692kx1A=='
      },
    }),
    MongooseModule.forFeature([{ name: 'Blogs', schema: BlogSchema }]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController, BlogPostsController],
  providers: [AppService, BlogPostsService],
})
export class AppModule { }
