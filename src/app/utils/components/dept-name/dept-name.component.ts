import {Component, Input, OnInit} from '@angular/core';
import {DeptDto} from "../../../dept/model/dept.dto";

@Component({
  selector: 'app-dept-name',
  templateUrl: './dept-name.component.html',
  styleUrls: ['./dept-name.component.css']
})
export class DeptNameComponent implements OnInit {

  deptList: DeptDto[] = [];

  @Input()
  deptNo: any = '';

  constructor() {

  }

  ngOnInit(): void {
    const deptListStr = sessionStorage.getItem('deptList');
    if (deptListStr) {
      this.deptList = JSON.parse(deptListStr);
    }
  }

  getDeptName() {
    if (this.deptNo) {
      const dept: DeptDto = this.deptList.filter(d => d.deptno == this.deptNo)[0];
      if (dept) {
        return dept.dname;
      }
    } else {
      return this.deptNo;
    }
  }

}
