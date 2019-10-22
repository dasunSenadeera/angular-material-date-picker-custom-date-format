import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { DatePipe } from '@angular/common';

import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};
/** @title Datepicker with custom formats */
@Component({
  selector: 'datepicker-formats-example',
  templateUrl: 'datepicker-formats-example.html',
  styleUrls: ['datepicker-formats-example.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class DatepickerFormatsExample {

  date = new FormControl(moment());

  constructor(private datePipe: DatePipe){
  }

  dateValue(){
    console.log(this.datePipe.transform(this.date.value, 'dd-MM-yyyy'))
  }
}
