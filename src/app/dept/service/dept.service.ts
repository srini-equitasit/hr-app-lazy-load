import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmpDto} from "../../emp/model/emp.dto";
import {DeptDto} from "../model/dept.dto";

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<DeptDto[]> {

    return this.http.get<DeptDto[]>('/dept/');

  }
}
