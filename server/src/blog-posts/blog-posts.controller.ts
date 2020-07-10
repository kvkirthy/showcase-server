import { Controller, Get } from '@nestjs/common';
import { BlogPostsService } from './blog-posts.service';

@Controller('blog-posts')
export class BlogPostsController {
    constructor(private blogService: BlogPostsService){

    }

    @Get()
    async getPosts(){
         let result = await this.blogService.getBlogs();
         return result;
    }
}


