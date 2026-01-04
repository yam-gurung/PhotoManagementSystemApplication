import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { photoDTO, ResponseData } from '../interface/responsedata.interface';
import { AsyncPipe } from '@angular/common';
import { DataService } from '../service/data.service';

@Component({
    selector:'app-home',
    imports: [MatPaginatorModule,AsyncPipe],
    templateUrl:'./home.html',
    styleUrl:'./home.css'
})
export class Home implements OnInit{
    data$!:Observable<any>;
    totalElements!:number;
    constructor(private http:HttpClient,private dataService:DataService){}

    ngOnInit() {
        const param={page:"1",size:"10"};
        this.data$=this.dataService.getphotoDTOs("1","10");
       // .subscribe(response=>{
       //     this.loading=false;
       //     this.photoDTOs=response.photoDTOs;
       //     this.totalElements=response.totalRecords;
       // });
        //this.totalElements=this.http.get<number>('http://localhost:8080/api/persons/totalrecords');
    }

    handlePageEvent($event: PageEvent) {
        const param={page:($event.pageIndex+1).toString(),size:$event.pageSize.toString()};
        this.data$=this.dataService.getphotoDTOs(($event.pageIndex+1).toString(),$event.pageSize.toString());
    }
 
}