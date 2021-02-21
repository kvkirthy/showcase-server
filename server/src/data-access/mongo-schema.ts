import * as mongoose from 'mongoose';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';

export enum StoryCategory{
    None,
    Banner,
    Highlight,
    NewsBit,
    Feed
}
@Schema()
export class Blog extends mongoose.Document{
    @Prop() title: string;
    @Prop() description: string;
    @Prop() imageUrl: string;
    @Prop() linkToBlog: string;
    @Prop() isHighlighted: boolean;
}

@Schema({
    collection: 'covid-data'
})
export class VaccinationRecord extends mongoose.Document{
    @Prop() location: string;
    @Prop() doesesGiven: number;
    @Prop() dosesPerHundred: number;
    @Prop() dateModified: Date;
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
    @Prop() story: string;
    @Prop() imageId: string;
    @Prop() linkToPost: string;
    @Prop() user: User;
    @Prop() storyCategory?: StoryCategory;
    @Prop() edition: {
        _id: string;
        title: string;
        description: string;
        dateCreated: string;
        isPublished: string;
    };
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
export const VaccinationRecordSchema = SchemaFactory.createForClass(VaccinationRecord);