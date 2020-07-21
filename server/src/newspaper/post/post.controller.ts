import { Controller, Post, Body } from '@nestjs/common';
import { NewspaperPost } from 'src/data-access/mongo-schema';
import { PostService } from 'src/newspaper/post/post.service';

@Controller('newspaper-post')
export class PostController {

    constructor(private postService: PostService){
    }

    @Post()
    createPost(@Body() post: NewspaperPost){
        return this.postService.createPost(post);
    }

}
