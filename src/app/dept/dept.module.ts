import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeptComponent } from './components/dept.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: DeptComponent
  }
];

@NgModule({
  declarations: [
    DeptComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class DeptModule { }
