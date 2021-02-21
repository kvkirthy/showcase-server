import { CovidService } from './covid.service';
import { Controller, Get } from '@nestjs/common';

@Controller('covid')
export class CovidController {

    constructor(private covidSvc: CovidService) {}

    @Get()
    async getVaccinations(){
         let result = await this.covidSvc.getVaccinations();
         return result;
    }
}
