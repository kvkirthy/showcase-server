import * as mongoose from 'mongoose';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';

@Schema()
export class Blog extends mongoose.Document{
    @Prop() title: string;
    @Prop() description: string;
    @Prop() imageUrl: string;
    @Prop() linkToBlog: string;
    @Prop() isHighlighted: boolean;
}

class User {
    @Prop() fullname: string;
    @Prop() twitterHandle: string;
    @Prop() userImageId: string;
}

@Schema()
export class NewspaperPost extends mongoose.Document{
    @Prop() title: string;
    @Prop() description: string;
    @Prop() imageId: string;
    @Prop() linkToPost: string;
    @Prop() user: User;
}

@Schema()
export class NewspaperEdition extends mongoose.Document{
    @Prop() title: string;
    @Prop() description: string;
    @Prop() dateCreated: string;
    @Prop() isPublished: string;
}

export const BlogSchema =  SchemaFactory.createForClass(Blog);
export const NewspaperPostSchema = SchemaFactory.createForClass(NewspaperPost);
export const NewspaperEditionSchema = SchemaFactory.createForClass(NewspaperEdition);