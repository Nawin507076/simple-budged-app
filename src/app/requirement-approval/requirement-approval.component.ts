import { Component, OnInit } from '@angular/core';
import { Requirement } from '../requirement';
import { RequirementListService } from '../requirement-list.service';

@Component({
  selector: 'app-requirement-approval',
  templateUrl: './requirement-approval.component.html',
  styleUrls: ['./requirement-approval.component.css']
})
export class RequirementApprovalComponent implements OnInit {
  requirements: Requirement[] = []

  constructor(
    private requirementService: RequirementListService) {
    // this.requirements
    // = requirementService.getRequirement();
  }

  ngOnInit(): void {
    this.requirementService.getRequirement()
    .subscribe(rs => this.requirements = rs)
   }

}
