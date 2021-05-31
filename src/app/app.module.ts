import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {HttpClientModule, HttpClient} from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './material-design/material-design.module'
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingDetailsComponent } from './bookings/bookings-details.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ApptestdirectiveDirective } from './apptestdirective/apptestdirective.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    EmployeedetailsComponent,
    routingComponents,
    BookingDetailsComponent,
    HomeComponent,
    ApptestdirectiveDirective,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
