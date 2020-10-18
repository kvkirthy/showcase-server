import { Controller } from '@nestjs/common';
import { EditionService } from './edition.service';
import { NewspaperEdition } from 'src/data-access/mongo-schema';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { Get, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';

@Controller('newspaper-edition')
export class EditionController {

    constructor(private editionService: EditionService){
    }

    @Get()
    getNewspaperEditions(){
        return this.editionService.getNewspaperEditions();
    }
    
    @Post()
    createNewspaperEdition(@Body() edition: NewspaperEdition){
        return this.editionService.createNewspaperEdition(edition);
    }
}
