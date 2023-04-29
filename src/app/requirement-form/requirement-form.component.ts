import { Component, OnInit,} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { RequirementListService } from '../requirement-list.service';
import { Requirement } from '../requirement';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-requirement-form',
  templateUrl: './requirement-form.component.html',
  styleUrls: ['./requirement-form.component.css'],
})
export class RequirementFormComponent implements OnInit {
  editId: number | null = null;

  fg =  new FormGroup({

    title: new FormControl('', Validators.required),
    contactMobileNo: new FormControl('', Validators.required),
  });



  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private requirementService: RequirementListService) {}

  ngOnInit(): void {
    this.editId = Number(this.route.snapshot.paramMap.get('id'));
    //if found id then edit acton
    if (this.editId) {
      this.requirementService
        .getRequirementToForm(this.editId)
        .subscribe(v => this.fg.patchValue(v));
    }
  }
  onSubmit(): void {
    //prerare data for API
    if (this.editId) {
    const editRequirement = this.fg.value as Requirement;
    this.requirementService
    .editRequirement(this.editId, editRequirement)
    .subscribe(() => this.router.navigate(['/requirment-list']));
  } else {
    const newRequirement = this.fg.value as Requirement;
    this.requirementService
    .addRequirement(newRequirement)
    .subscribe(() => this.router.navigate(['/requirment-list']));
  }
  }
  onBack(): void {
    this.router.navigate(['requirment-list']);
  }
  // ngOnInit(): void {
  // }

}
