
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintService } from '../complaint.service';
import { Complaint } from '../complaint';
@Component({
  selector: 'app-complaint-form',
  templateUrl: './complaint-form.component.html',
  styleUrls: ['./complaint-form.component.css']
})


 export class ComplaintFormComponent implements OnInit {
  complaint: Complaint = {
    date: '',
    time: '',
    ticketNo: '',
    projectName: '',
    moduleName: '',
    subModuleName: '',
    frequency: '',
    priority: '',
    issue: '',
    status: 'new',
    attachment: ''
  };

  constructor(
    private complaintService: ComplaintService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const now = new Date();
    this.complaint.date = now.toISOString().slice(0, 10); // yyyy-mm-dd
    this.complaint.time = now.toLocaleTimeString();
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.complaint.attachment = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (
      this.complaint.projectName &&
      this.complaint.moduleName &&
      this.complaint.subModuleName &&
      this.complaint.issue
    ) {
      this.complaintService.create(this.complaint).subscribe(() => {
        this.router.navigate(['/list']);
      });
    }
  }
}