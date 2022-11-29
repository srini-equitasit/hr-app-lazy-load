import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'emps',
    loadChildren: () => import('./emp/emp.module').then(m => m.EmpModule)
  },
  {
    path: 'depts',
    loadChildren: () => import('./dept/dept.module').then(m => m.DeptModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
