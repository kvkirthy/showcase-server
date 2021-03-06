import { Controller, Get } from '@nestjs/common';
import { StorageService } from './storage.service';

@Controller('storage')
export class StorageController {

    constructor(private storageService: StorageService){
    }

    @Get()
    public getBanners(){
        return this.storageService.getBanners();
    }

    @Get('avatars')
    public getAvatars(){
        return this.storageService.getAvatars();
    }
}
