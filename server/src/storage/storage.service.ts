import { writeFile } from 'fs';
import { Injectable } from '@nestjs/common';
// import * as azure from 'azure-storage'
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';
// import { BlogSchema } from 'src/data-access/mongo-schema';

@Injectable()
export class StorageService {

    private blobService;
    private blobServiceClient: BlobServiceClient;
    private containerClient: ContainerClient;
    constructor() {
        // todo: move to configuration
        this.blobServiceClient = BlobServiceClient
            .fromConnectionString("DefaultEndpointsProtocol=https;AccountName=storage4showcase;AccountKey=RNNv5KQxyi2nt90F2uvXapmoTLV4HiTa9g5sMDUeR+E06rTb2fERgR70TrXO8/LdlcMVGuIt5NAqoE7rInP6zg==;EndpointSuffix=core.windows.net");
    }

    uploadImage(){
        this.containerClient = this.blobServiceClient.getContainerClient('banners');
    }

    getBanners2(){
        let containerClient2 = this.blobService.getContainerClient('banners');
        containerClient2.getBlobToStream()
    }

    async getBanners() {
        let images = []
        this.containerClient = this.blobServiceClient.getContainerClient('banners');
        for await (const blob of this.containerClient.listBlobsFlat()) {
            images.push(this.containerClient.getBlobClient(blob.name).url);
        }
        return images;
    }

    async getAvatars(): Promise<Array<string>>{
        let images: Array<string> = []
        this.containerClient = this.blobServiceClient.getContainerClient('avatars');
        this.containerClient.url
        for await (const blob of this.containerClient.listBlobsFlat()) {
            images.push(this.containerClient.getBlobClient(blob.name).url);
        }
        return images;
    }

    // A helper method used to read a Node.js readable stream into string
    async streamToString(readableStream) {
        return new Promise((resolve, reject) => {
        const chunks = [];
        readableStream.on("data", (data) => {
            chunks.push(data.toString());
        });
        readableStream.on("end", () => {
            resolve(chunks.join(""));
        });
        readableStream.on("error", reject);
        });
    }

}
