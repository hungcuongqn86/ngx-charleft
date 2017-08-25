# ngx-charleft
Angular directive to count the remaining characters of the input

## Installation
$ npm install ngx-charleft --save

## Implementation
```
import {CharLeftDirective} from 'ngx-charleft';

@NgModule({
  declarations: [
    ....,
    CharLeftDirective
  ],
  ...
})
```

Add it to your [template]:
You need add ngModel to input
```
<input [(ngModel)]="mod.title"
         name="title"
         [niCharLeft]="50">
```
## Options
  labelClass: class of tip,
  labelText: text of tip,
  primaryColor,
  dangerColor
  
  example
  ```
  <input [(ngModel)]="mod.title"
         name="title"
         [niCharLeft]="50"
         [labelClass]="'lab-charLeft'"
         [primaryColor]="'blue'"
         [dangerColor]="'red'"
         class="form-control">
  ```
