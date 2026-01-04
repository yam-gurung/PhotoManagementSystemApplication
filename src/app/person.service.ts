import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { Person } from './person.interface';

@Injectable({
    providedIn:'root'
})
export class PersonService{

    private apiUrl="http://localhost:8080/api/persons";

    constructor(private http:HttpClient){
    }

    getPerson():Observable<Person[]>{
        return this.http.get<Person[]>(this.apiUrl);
    }
}