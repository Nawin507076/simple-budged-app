import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { mobileFormat } from '../mobile-format';
import { Requirement } from '../requirement';
import { RequirementListService } from '../requirement-list.service';

@Component({
  selector: 'app-requirment-list',
  templateUrl: './requirment-list.component.html',
  styleUrls: ['./requirment-list.component.css']
})
export class RequirmentListComponent implements OnInit{

  requirements: Requirement[] = []

  isSmallTable = new FormControl(false);

  constructor(
    private router: Router,
    private requirementService: RequirementListService) {
    // this.requirements
    // = requirementService.getRequirement();
  }

  ngOnInit(): void {
    this.requirementService.getRequirement()
    .subscribe(rs => this.requirements = rs)
   }

  onAdd(): void {
    this.router.navigate(['/requirment-form']);
  }

  //  contactMobileNoFormat(mobileNo : string): string {
  //   return mobileFormat(mobileNo);

  //  }
}


