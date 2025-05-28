import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../complaint.service';
import { Router } from '@angular/router';
import { Complaint } from '../complaint';

@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.css']
})
export class ComplaintListComponent implements OnInit {
  complaints: Complaint[] = [];

  constructor(
    private complaintService: ComplaintService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadComplaints();
  }

  loadComplaints(): void {
    this.complaintService.getAll().subscribe((data: Complaint[]) => {
      this.complaints = data;
    });
  }

  viewComplaint(id: number): void {
    this.router.navigate(['/view', id]);
  }

  editComplaint(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deleteComplaint(id: number): void {
  const confirmed = confirm('Are you sure you want to delete this complaint?');

  if (confirmed) {
    this.complaintService.delete(id).subscribe(() => {
      this.loadComplaints(); // Refresh the list after delete
    });
  }
}
}