import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeptListComponent} from "./components/dept-list/dept-list.component";
import { DeptNameComponent } from './components/dept-name/dept-name.component';



@NgModule({
  declarations: [DeptListComponent, DeptNameComponent],
  exports: [
    DeptListComponent,
    DeptNameComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UtilsModule { }
