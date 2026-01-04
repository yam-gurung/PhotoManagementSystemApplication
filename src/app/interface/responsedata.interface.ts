export interface ResponseData<T>{
    photoDTOs:T[];
    totalRecords:number;
}

export interface photoDTO{
    name:string;
    photoId:string;
    photoPath:string;
}