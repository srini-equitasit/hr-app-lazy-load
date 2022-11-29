import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpComponent } from './components/mgmt/emp.component';
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./material.module";
import {RouterModule, Routes} from "@angular/router";
import {UtilsModule} from "../utils/utils.module";

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
    UtilsModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class EmpModule { }
