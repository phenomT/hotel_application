import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminPageFormComponent } from './admin-page-form/admin-page-form.component';
import { AdminPageUploadComponent } from './admin-page-upload/admin-page-upload.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HotelSearchService } from './hotel-search.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AdminPageComponent,
    AdminPageFormComponent,
    AdminPageUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HotelSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
