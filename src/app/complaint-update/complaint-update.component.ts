import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../complaint.service';
import {ActivatedRoute, Router } from '@angular/router';
import { Complaint } from '../complaint';

@Component({
  selector: 'app-complaint-update',
  templateUrl: './complaint-update.component.html',
  styleUrls: ['./complaint-update.component.css']
})
export class ComplaintUpdateComponent implements OnInit {
  complaint: Complaint = {
    id: 0,
    date: '',
    time: '',
    ticketNo: '',
    projectName: '',
    moduleName: '',
    subModuleName: '',
    frequency: '',
    priority: '',
    issue: '',
    status: '',
    attachment: ''
  };

  constructor(
    private route: ActivatedRoute,
    private complaintService: ComplaintService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.complaintService.getById(id).subscribe(data => {
      this.complaint = data;
    });
  }

  updateComplaint(): void {
    this.complaintService.update(this.complaint.id!, this.complaint).subscribe(() => {
      alert('Complaint updated successfully!');
      this.router.navigate(['/list']);
    });
  }
  cancel(): void {
  this.router.navigate(['/list']);
}
}