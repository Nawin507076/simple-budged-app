import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequirmentListComponent } from './requirment-list/requirment-list.component';

const routes: Routes = [
  { path: 'requirment-list', component: RequirmentListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
