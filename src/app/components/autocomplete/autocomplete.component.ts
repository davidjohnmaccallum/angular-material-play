import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  options = ['one', 'two', 'three'];
  filteredOptions: Observable<string[]>;
  formControl = new FormControl('');

  ngOnInit() {
    this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        console.log(value);
        const opt = this.options.filter(option => option.toLowerCase().includes(value.toLowerCase()));
        console.log(opt);
        return opt;
      })
    );
  }

}
