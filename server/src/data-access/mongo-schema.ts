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

export const BlogSchema =  SchemaFactory.createForClass(Blog);