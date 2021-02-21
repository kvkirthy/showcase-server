import { join } from 'path';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CovidService } from './covid/covid.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CovidController } from './covid/covid.controller';
import { StorageService } from './storage/storage.service';
import { PostService } from './newspaper/post/post.service';
import { StorageController } from './storage/storage.controller';
import { PostController } from './newspaper/post/post.controller';
import { BlogPostsService } from './blog-posts/blog-posts.service';
import { EditionService } from './newspaper/edition/edition.service';
import { BlogPostsController } from './blog-posts/blog-posts.controller';
import { EditionController } from './newspaper/edition/edition.controller';

import { BlogSchema, 
  NewspaperEditionSchema, 
  NewspaperPostSchema, 
  VaccinationRecordSchema } from './data-access/mongo-schema';

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
      { name: 'Vaccination_Record', schema: VaccinationRecordSchema},
      { name: 'Newspaper_Edition', schema: NewspaperEditionSchema }
    ]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController, 
        BlogPostsController, 
        StorageController, 
        PostController, 
        EditionController, 
        CovidController
  ],
  providers: [AppService, 
        BlogPostsService, 
        StorageService,
        PostService, 
        EditionService, 
        CovidService
      ],
})
export class AppModule { }
