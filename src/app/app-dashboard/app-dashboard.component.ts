import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.css']
})
export class AppDashboardComponent {
  txt = '<input appCurrency decimalCount="3" decimalChar="," \
        formControlName="num1" [formGroup]="form" />';
}
