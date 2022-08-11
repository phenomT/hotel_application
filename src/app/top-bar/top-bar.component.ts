import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  searchCriteria = -1;
  @Input() targetPage: any;
  @Input() uploadPage: any;
  @Input() selectedItem: any;
  @Input() criteria: any;
  @Output() deleteItem: EventEmitter<any> = new EventEmitter();
  @Output() exportTable: EventEmitter<any> = new EventEmitter();
  @Output() searchTable: EventEmitter<any> = new EventEmitter();
  constructor(private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }

  openForm(): void {
   this.dialogRef.open(this.targetPage, {disableClose: true,
      width: 'fit-content',
      height: '500px',
    });
  }

  editItem(): void {
    this.dialogRef.open(this.targetPage, {data: {edit: this.selectedItem}});
  }

  deleteIt(): void {
    this.deleteItem.emit('deleteItem');
  }

  importIt(): void {
    this.dialogRef.open(this.uploadPage);
  }

  exportIt(): void {
    this.exportTable.emit('exportTable');
  }

  searchIt(e: any): void {
    const textfield = e.target || e.srcElement;
    const searchObj = {value: textfield.value, crit: this.searchCriteria};
    this.searchTable.emit(searchObj);
  }

  setSearchCrit(e: any): void {
    const dpBox = e.target || e.srcElement;
    this.searchCriteria = dpBox.value;
  }
}
