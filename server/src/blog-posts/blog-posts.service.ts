import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from '../data-access/mongo-schema';

@Injectable()
export class BlogPostsService {

    constructor(@InjectModel('Blogs') private readonly blogs: Model<Blog>){
    }

    async getBlogs(){
       let blogs = await this.blogs.find().exec();
       return blogs;
    }

}
