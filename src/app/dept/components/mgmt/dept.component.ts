import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DeptDto} from "../../model/dept.dto";
import {EmpDto} from "../../../emp/model/emp.dto";
import {DeptService} from "../../service/dept.service";

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent implements OnInit {

  deptList: DeptDto[] = [];



  constructor(private deptService: DeptService) {
  }

  ngOnInit(): void {
    const deptAllObs = this.deptService.getAll();

    deptAllObs.subscribe((data: DeptDto[]) => {
      this.deptList = data;
    });

  }



}
