import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpComponent } from './components/emp.component';
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./material.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: EmpComponent
  }
];

@NgModule({
  declarations: [
    EmpComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class EmpModule { }
