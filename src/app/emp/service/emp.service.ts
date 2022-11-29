import {Injectable} from '@angular/core';
import {EmpDto} from "../model/emp.dto";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<EmpDto[]> {

    return this.http.get<EmpDto[]>(environment.empApi);

  }
}
