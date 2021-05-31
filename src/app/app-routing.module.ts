import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { BookingDetailsComponent } from './bookings/bookings-details.component';
import{HomeComponent } from './home/home.component';

const redirectToApp = 'home';

const routes: Routes = [
   { path: '', redirectTo: redirectToApp, pathMatch: 'full'},
  {
    path: 'employeedetails',
    component: EmployeedetailsComponent
  },
  {
    path: 'bookingdetails',
    component: BookingDetailsComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeedetailsComponent,BookingDetailsComponent]
