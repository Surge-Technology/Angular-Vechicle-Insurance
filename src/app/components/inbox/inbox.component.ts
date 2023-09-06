import { Component,OnInit } from '@angular/core';


export interface Application {
  applicationNumber: string;
  applicantName: string;
  dateOfSubmission: Date;
  status: string;
}

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit{
  public applications: Application[] = [
    {
      applicationNumber: 'APP001',
      applicantName: 'John Doe',
      dateOfSubmission: new Date('2023-09-01'),
      status: 'Pending',
    },
    {
      applicationNumber: 'APP002',
      applicantName: 'Alice Smith',
      dateOfSubmission: new Date('2023-09-02'),
      status: 'Approved',
    },
    // Add more application data as needed
  ];
  displayedColumns: string[] = [
    'applicationNumber',
    'applicantName',
    'dateOfSubmission',
    'status',
    'actions',
  ];
  public dataSource :any =[] ;
  ngOnInit() {
    this.loadData();
    
  }

  loadData(){
    
  }

  viewApplication() {
    // Implement edit logic here
  }

}
