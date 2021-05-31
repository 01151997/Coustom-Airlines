import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
public value: boolean
  public customAirWay: Array<any> = [
{
  'Cost':'25000',
  'rating':4,
  'startTime':'02:30',
  'endTime':'10:30',
  'status':'Available',
  'departure':'Mumbai',
  'arrival':'New York',
},
{
  'Cost':'30000',
  'rating':4,
  'startTime':'1:30',
  'endTime':'05:30',
  'status':'Unavailable',
  'departure':'Delhi',
  'arrival':'Dubai',
},
{
  'Cost':'17000',
  'rating':5,
  'startTime':'14:30',
  'endTime':'07:30',
  'status':'Available',
  'departure':'Chennai',
  'arrival':'New York',
  'available':'Available'
},
{
  'Cost':'11000',
  'rating':2,
  'startTime':'12:30',
  'endTime':'05:30',
  'status':'Unavailable',
  'departure':'Mumbai',
  'arrival':'Delhi',
  'available':'Available'
},
{
  'Cost':'20000',
  'rating':4,
  'startTime':'12:30',
  'endTime':'05:30',
  'status':'Unavailable',
  'departure':'Delhi',
  'arrival':'Dubai',
},
{
  'Cost':'18000',
  'rating':3,
  'startTime':'12:30',
  'endTime':'05:30',
  'status':'Available',
  'departure':'Kolkata',
  'arrival':'Tokiyo',
  'available':'Available'
},
{
  'Cost':'11000',
  'rating':5,
  'startTime':'12:30',
  'endTime':'05:30',
  'status':'Unavailable',
  'departure':'Mumbai',
  'arrival':'Weeze',
},
{
  'Cost':'31000',
  'rating':5,
  'startTime':'12:30',
  'endTime':'05:30',
  'status':'Available',
  'departure':'Mumbai',
  'arrival':'Tokiyo',
},
{
  'Cost':'21000',
  'rating':5,
  'startTime':'12:30',
  'endTime':'05:30',
  'status':'Unavailable',
  'departure':'Mumbai',
  'arrival':'Tokiyo',
},
{
  'Cost':'25000',
  'rating':4,
  'startTime':'02:30',
  'endTime':'10:30',
  'status':'Available',
  'departure':'Mumbai',
  'arrival':'New York',
},
  ]
}
