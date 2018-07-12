import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  form: FormGroup;

  fields = [
    { name: 'num1', value: '', divider: '.', dplaces: 2 },
    { name: 'num2', value: 123.45, divider: ',', dplaces: 3 },
    { name: 'num3', value: '23.4', divider: '.', dplaces: 4 },
    { name: 'num4', value: '3.456789445', divider: ',', dplaces: 5 },
    { name: 'num5', value: 0, divider: '.', dplaces: 6 }

  ];



  constructor() {
    this.form = new FormGroup({});
    this.fields.forEach(f => this.form.addControl(f.name, new FormControl(f.value)));

  }

  ngOnInit() {
  }

}
