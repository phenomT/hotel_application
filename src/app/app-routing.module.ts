import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminPageFormComponent } from './admin-page-form/admin-page-form.component';

const routes: Routes = [
  { path: 'admin-page', component: AdminPageComponent },
  {path: 'admin-page-form', component: AdminPageFormComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
