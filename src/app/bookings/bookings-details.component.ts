import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data/data.service'
@Component({
  selector: 'app-booking-details',
  templateUrl: './bookings-details.component.html',
  styleUrls: ['./bookings-details.component.scss'],
})
export class BookingDetailsComponent implements OnInit {

  constructor(public data: DataService,
    public fb: FormBuilder) { }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  starRating = 4;
  public workList = [];
  public searchForm: FormGroup;
  public valueNotFound: boolean;
  ngOnInit(): void {
    console.log(this.data.customAirWay)
    console.log(this.data.value)
    this.workList = this.data.customAirWay

    this.searchForm = this.fb.group({
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      date: ['', Validators.required],
      slider: ['', Validators.required]
    })
  }
  public onSearch(): void {
    console.log(this.searchForm.value);
    if (this.searchForm.valid) {
      this.workList = this.workList.filter(data => {
        return data.departure.toString().toLowerCase() === this.searchForm.value.departure.toString().toLowerCase() &&
          data.arrival.toString().toLowerCase() === this.searchForm.value.arrival.toString().toLowerCase() &&
          data.Cost.toString().toLowerCase() === this.searchForm.value.slider.toString().toLowerCase();
      })
      console.log(this.workList)
      if (this.workList.length === 0) {
        this.valueNotFound = true;
      } else {
        this.valueNotFound = false;
      }
    }
  }
  public onRefresh(): void {
    this.searchForm.patchValue({
      departure: '',
      arrival: '',
      date: '',
      slider: ''
    })
    this.workList = this.data.customAirWay
    this.valueNotFound = false;
  }
}
