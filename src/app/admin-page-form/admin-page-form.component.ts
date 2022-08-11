import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { HotelSearchService } from '../hotel-search.service';


@Component({
  selector: 'app-admin-page-form',
  templateUrl: './admin-page-form.component.html',
  styleUrls: ['./admin-page-form.component.css']
})
export class AdminPageFormComponent implements OnInit {
  hotels: any = [];
  amenities: any = [];
  constructor(public dialogRef: MatDialogRef<AdminPageFormComponent>, private dataService: HotelSearchService) { }

  ngOnInit(): void {
  }

  closeBatch(): void {
    this.dialogRef.close();
  }

  save(): void {
    //this.hotels.image_desc = this.amenities;
    console.log(this.hotels);

    this.dataService.store(this.hotels).subscribe(data => {
      if (data.status === 'Success') {
        window.alert(data.message);
        setTimeout(() => { window.location.reload(); });
      }
    });
  }

  resetform(): void {
    this.hotels = {};

  }



}
