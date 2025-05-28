import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../complaint';

@Component({
  selector: 'app-complaint-view',
  templateUrl: './complaint-view.component.html',
  styleUrls: ['./complaint-view.component.css']
})
export class ComplaintViewComponent implements OnInit {
  complaint?: Complaint;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private complaintService: ComplaintService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;

    if (id !== null) {
      this.complaintService.getById(id).subscribe({
        next: (data) => {
          this.complaint = data;
        },
        error: (error) => {
          console.error('Error fetching complaint:', error);
          this.complaint = undefined;
        }
      });
    } else {
      this.complaint = undefined;
    }
  }

  close(): void {
    this.router.navigate(['/list']); // Replace with your route
  }
}
