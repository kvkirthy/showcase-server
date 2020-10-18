import { Model, mongo } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NewspaperEdition, NewspaperPost } from 'src/data-access/mongo-schema';

@Injectable()
export class PostService {

    constructor(@InjectModel('Newspaper_Post') private readonly posts: Model<NewspaperPost>){
    }

    async getActivePosts(){
        return await this.posts.find().exec();
    }

    async createPost(doc: NewspaperPost){
        const post = new this.posts(doc);
        return post.save();
    }
}
