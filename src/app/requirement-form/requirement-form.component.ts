import { Component,} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { RequirementListService } from '../requirement-list.service';
import { Requirement } from '../requirement';
import { Router } from '@angular/router';
@Component({
  selector: 'app-requirement-form',
  templateUrl: './requirement-form.component.html',
  styleUrls: ['./requirement-form.component.css'],
})
export class RequirementFormComponent {


  fg =  new FormGroup({
    title: new FormControl('', Validators.required),
    contactMobileNo: new FormControl('', Validators.required),
  });



  constructor(
    private router:Router,
    private requirementService: RequirementListService) {}
  onSubmit(): void {
    //prerare data for API
    const newRequirement = this.fg.value as Requirement;
    this.requirementService
    .addRequirement(newRequirement)
    .subscribe(() => this.router.navigate(['requirment-list']));
  }

  onBack(): void {
    this.router.navigate(['requirment-list']);
  }
  // ngOnInit(): void {
  // }

}
