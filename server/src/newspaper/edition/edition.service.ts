import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { NewspaperEdition } from 'src/data-access/mongo-schema';

@Injectable()
export class EditionService {
    constructor(@InjectModel('Newspaper_Edition') private readonly edition: Model<NewspaperEdition>){
    }

    async getNewspaperEditions(){
        return await this.edition.find().exec();
    }

    async createNewspaperEdition(doc: NewspaperEdition){
        const mongoDoc = new this.edition(doc);
        return mongoDoc.save();
    }
}
