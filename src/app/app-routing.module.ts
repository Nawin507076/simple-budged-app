import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequirementApprovalComponent } from './requirement-approval/requirement-approval.component';
import { RequirementFormComponent } from './requirement-form/requirement-form.component';
import { RequirmentListComponent } from './requirment-list/requirment-list.component';

const routes: Routes = [
  { path: 'requirment-list', component: RequirmentListComponent },
  { path: 'requirment-form', component: RequirementFormComponent },
  { path: 'requirment-form/:id', component: RequirementFormComponent },
  { path: 'requirment-approval', component: RequirementApprovalComponent },



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
