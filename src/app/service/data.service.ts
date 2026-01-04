import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { photoDTO, ResponseData } from "../interface/responsedata.interface";


@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getphotoDTOs(page: string, size: string): Observable<ResponseData<photoDTO>> {
    const param={page:page,size:size};
    return this.http.get<ResponseData<photoDTO>>('http://localhost:8080/api/persons',{params: param});
  }
}