import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DeptService} from "../../../dept/service/dept.service";
import {DeptDto} from "../../../dept/model/dept.dto";

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  deptList: DeptDto[] = [];

  @Output()
  deptChange = new EventEmitter();

  constructor(private deptService: DeptService) {
  }

  ngOnInit(): void {
    const deptAllObs = this.deptService.getAll();

    deptAllObs.subscribe((data: DeptDto[]) => {
      this.deptList = data
      sessionStorage.setItem('deptList', JSON.stringify(this.deptList));
    });
  }

  onDeptChange(val: any) {
    console.log('val = ' + val.target.value);
    this.deptChange.emit(val.target.value);
  }
}
