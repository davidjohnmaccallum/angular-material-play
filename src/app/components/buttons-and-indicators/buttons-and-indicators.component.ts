import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-and-indicators',
  templateUrl: './buttons-and-indicators.component.html',
  styleUrls: ['./buttons-and-indicators.component.scss']
})
export class ButtonsAndIndicatorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  removeChip() {
    console.log("Remove chip");
  }

}
