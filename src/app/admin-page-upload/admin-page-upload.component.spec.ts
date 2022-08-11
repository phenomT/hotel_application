import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageUploadComponent } from './admin-page-upload.component';

describe('AdminPageUploadComponent', () => {
  let component: AdminPageUploadComponent;
  let fixture: ComponentFixture<AdminPageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPageUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
