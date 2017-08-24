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
You need add ngModel for input
```
<input [(ngModel)]="mod.title"
         name="title"
         [niCharLeft]="opt">
```
## Options
  count: Number of characters, default 50,
  labelClass: class of tip,
  labelText: text of tip,
  primaryColor,
  dangerColor
  
  example
  ```
  opt = {
    count: 50,
    labelClass: 'labelClass',
    labelText: 'characters left',
    primaryColor: 'blue',
    dangerColor: 'red'
  };
  ```
