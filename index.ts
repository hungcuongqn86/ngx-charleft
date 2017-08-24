import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  selector: '[ngModel][niCharLeft]',
})
export class CharLeftDirective implements OnInit, OnDestroy {
  @Input('niCharLeft')
  public niCharLeft = {
    count: 50,
    labelClass: '',
    labelText: 'characters left',
    primaryColor: 'black',
    dangerColor: 'red'
  };
  private modelValue = null;
  private subs: any;

  constructor(public model: NgControl, private el: ElementRef) {
  }

  ngOnInit() {
    this.modelValue = this.model.value;
    const wrapper = document.createElement('label');
    if (this.niCharLeft.labelClass && this.niCharLeft.labelClass !== '') {
      wrapper.classList.add(this.niCharLeft.labelClass);
    }
    this.el.nativeElement.insertAdjacentElement('beforebegin', wrapper);
    this.subs = this.model.valueChanges
      .subscribe(mv => {
        const ilength = this.model.value ? this.model.value.length : 0;
        let countview = this.niCharLeft.count - ilength;
        if (countview <= Math.ceil(this.niCharLeft.count * 10 / 100)) {
          wrapper.style.color = this.niCharLeft.dangerColor;
        } else {
          wrapper.style.color = this.niCharLeft.primaryColor;
        }
        if (countview < 0) {
          countview = 0;
          this.modelValue = this.model.value.substring(countview, this.niCharLeft.count);
          this.model.valueAccessor.writeValue(this.modelValue);
        }
        wrapper.textContent = countview.toString() + ' ' + this.niCharLeft.labelText;
      });
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
