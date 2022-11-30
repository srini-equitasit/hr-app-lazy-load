import {Component, OnInit} from '@angular/core';
import {EmpDto} from "../../model/emp.dto";
import {EmpService} from "../../service/emp.service";

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  empList: EmpDto[] = [];

  originalEmpList: EmpDto[] = [];

  displayedColumns: string[] = ['empno', 'ename','hiredate', 'deptno'];

  constructor(private empService: EmpService) {
  }


  ngOnInit(): void {

    const empAllObs = this.empService.getAll();

    empAllObs.subscribe((data: EmpDto[]) => {
      this.empList = data;
      this.originalEmpList = data;
    });

  }

  onDepartmentChanged(val: number) {

    if (val) {
      this.empList = this.originalEmpList.filter(emp => emp.deptno == val);
    } else {
      this.empList = this.originalEmpList;
    }
  }

}
