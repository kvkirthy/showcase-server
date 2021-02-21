import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { VaccinationRecord } from 'src/data-access/mongo-schema';

@Injectable()
export class CovidService {
    constructor(@InjectModel('Vaccination_Record') private readonly vaccine: Model<VaccinationRecord>){
    }

    async getVaccinations(){
       return await this.vaccine.find().exec();
    }

}
