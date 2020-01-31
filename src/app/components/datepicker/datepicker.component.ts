import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  log = console.log;
  picker5Control = new FormControl(new Date());
  // Not weekends
  picker8Filter = (d: Date): boolean => d.getDay() !== 0 && d.getDay() !== 6;

  constructor() { }

  ngOnInit() {
  }

  // Highlighting specific dates (not working)

  dateClass = (d: Date) => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return (date === 1 || date === 20) ? 'example-custom-date-class' : undefined;
  }

}
