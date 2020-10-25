import { Controller, Post, Body, Get, Query } from '@nestjs/common';
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

    @Get('by-edition')
    getPostsByEdition(@Query("editionId") editionId: string){
        return this.postService.getPostsByEdition(editionId);
    }

    @Post()
    createPost(@Body() post: NewspaperPost){
        return this.postService.createPost(post);
    }

    @Post('update-list')
    updatePosts(@Body() posts: NewspaperPost[]){
        if(posts && posts.length > 0){
            return this.postService.updatePosts(posts);
        }
    }

    // @Get("cleanup")
    // cleanup(){
    //     return this.postService.cleanupPosts();
    // }

}
