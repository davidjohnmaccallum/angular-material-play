import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  selected = '1';

  verses = [
    {
      id: 1,
      name: 'For God so loved the world',
    },
    {
      id: 2,
      name: 'Do not be anxious about anything',
    },
    {
      id: 3,
      name: 'Do not worry about tomorrow',
    },
  ];

  // Angular uses object identity to select option. It's possible for the identities
  // of items to change while the data does not. This can happen, for example, if the
  // items are produced from an RPC to the server, and that RPC is re-run. Even if the
  // data hasn't changed, the second response will produce objects with different identities.
  compareWith = (v1, v2) => v1 && v2 ? v1.id === v2.id : v1 === v2;

  multiChange(event) {
    console.log(event);
  }

  select = new FormControl();

}
