# NgxCurrencyDirective

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Features
- Angular 6, directive appCurrency in input element
- Reactive forms
  - formControlName + formGroup properties
  - formControl property
- Configurable decimal separator - default is ','
  - decimalChar (input property)
  - CurrencyDirective.defaultDecimalChar (global setting)
- Configurable decimal count - default is 2
  - decimalCount (input property)
  - CurrencyDirective.defaultDecimalCount  (global setting
- Auto align decimal count
- Editing similar to desktop applications
- Tested with Angular Material 6 (no depenednecy on angular material)

## Sample usage
```
<input appCurrency decimalCount="3" decimalChar="," formControlName="num1" [formGroup]="form" />
```

## Minimal sample
```
<input appCurrency formControlName="num1" [formGroup]="form" />
```

## Material sample
```
<mat-form-field>
    <input matInput appCurrency formControlName="num1" [formGroup]="form" />
</mat-form-field>
```


## Sample project preview
![sample.png](sample.png "sample.png")

## Contributing
Contributions are welcome!
- convert into decimal into model
- remove need of formGroup property in directive
- editing behavior improvements

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
