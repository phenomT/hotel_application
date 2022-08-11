import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminPageFormComponent } from '../admin-page-form/admin-page-form.component';
import { AdminPageUploadComponent } from '../admin-page-upload/admin-page-upload.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  targetPage = AdminPageFormComponent;
  uploadPage = AdminPageUploadComponent;
  selectedItem = 0;
  constructor(private router: Router, private dialog: MatDialog, private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }

  openForm(): void {
    this.dialogRef.open(this.targetPage, {disableClose: true,
       width: 'fit-content',
       height: '500px',
     });
   }

   editItem(): void {

   }

  deleteItem(): void {

  }

  exportTable(): void {

  }

  searchTable(searchObj: any): void {

  }

}
