import { Model, mongo } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NewspaperEdition, NewspaperPost } from 'src/data-access/mongo-schema';

@Injectable()
export class PostService {

    constructor(@InjectModel('Newspaper_Post') private readonly posts: Model<NewspaperPost>){
    }

    async getActivePosts(){
        return await this.posts.find({
            title: { $exists: true, $ne: null }
        }).exec();
    }

    async createPost(doc: NewspaperPost){
        const post = new this.posts(doc);
        return post.save();
    }

    async updatePosts(posts: NewspaperPost[]){
        await this.posts.updateMany({
            'edition._id': {$eq: posts[0].edition._id}
        }, {edition: null});
        
        posts.forEach( async post => {
            await this.posts.updateOne({_id: post._id}, {
                    edition: post.edition, 
                    storyCategory: post.storyCategory
                },
                (err, product: NewspaperPost) => {
                    console.log("error", err);
                    console.log("product", product);
                });
        });

    }

    // async cleanupPosts(){
    //     return await this.posts.deleteMany({
    //         title: { $exists: false, $eq: null }
    //     }).exec();
    // }

}
