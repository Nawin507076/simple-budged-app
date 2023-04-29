import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequirementFormComponent } from './requirement-form/requirement-form.component';
import { RequirmentListComponent } from './requirment-list/requirment-list.component';

const routes: Routes = [
  { path: 'requirment-list', component: RequirmentListComponent },
  { path: 'requirment-form', component: RequirementFormComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
