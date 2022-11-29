import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeptListComponent} from "./components/dept-list/dept-list.component";



@NgModule({
  declarations: [DeptListComponent],
  exports: [
    DeptListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UtilsModule { }
