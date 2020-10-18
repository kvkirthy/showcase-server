import { Controller, Post, Body, Get } from '@nestjs/common';
import { NewspaperPost } from 'src/data-access/mongo-schema';
import { PostService } from 'src/newspaper/post/post.service';

@Controller('newspaper-post')
export class PostController {

    constructor(private postService: PostService){
    }

    @Get()
    getActivePosts(){
        return this.postService.getActivePosts();
    }

    @Post()
    createPost(@Body() post: NewspaperPost){
        return this.postService.createPost(post);
    }

    // @Post()
    // createPost(@Body() post: NewspaperPost){
    //     return this.postService.createPost(post);
    // }

}
