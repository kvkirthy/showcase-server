import { join } from 'path';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { BlogSchema, NewspaperPostSchema } from './data-access/mongo-schema';
import { BlogPostsService } from './blog-posts/blog-posts.service';
import { BlogPostsController } from './blog-posts/blog-posts.controller';
import { StorageController } from './storage/storage.controller';
import { StorageService } from './storage/storage.service';
import { PostController } from './newspaper/post/post.controller';
import { PostService } from './newspaper/post/post.service';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://showcase.mongo.cosmos.azure.com:10255/showcase?ssl=true", {
      auth: {
        user: 'showcase',
        password: 'nmheirkYTHtsoe1adZNLeOEsD1ZJUFQtZyjd0tLcUWrgzgByq03bOBzKWdJsPNbPrZT3V7qaCkv601i692kx1A=='
      },
    }),
    MongooseModule.forFeature([
      { name: 'Blogs', schema: BlogSchema },
      { name: 'Newspaper_Post', schema: NewspaperPostSchema },
    ]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController, BlogPostsController, StorageController, PostController],
  providers: [AppService, BlogPostsService, StorageService, PostService],
})
export class AppModule { }
