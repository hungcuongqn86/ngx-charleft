import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  selector: '[ngModel][niCharLeft]',
})
export class CharLeftDirective implements OnInit, OnDestroy {
  @Input('niCharLeft')
  public niCharLeft;
  @Input('labelClass')
  public labelClass = '';
  @Input('labelText')
  public labelText = 'characters left';
  @Input('primaryColor')
  public primaryColor = 'black';
  @Input('dangerColor')
  public dangerColor = 'red';
  private modelValue = null;
  private subs: any;

  constructor(public model: NgControl, private el: ElementRef) {
  }

  ngOnInit() {
    this.modelValue = this.model.value;
    const wrapper = document.createElement('label');
    if (this.labelClass && this.labelClass !== '') {
      wrapper.classList.add(this.labelClass);
    }
    this.el.nativeElement.insertAdjacentElement('beforebegin', wrapper);
    this.subs = this.model.valueChanges
      .subscribe(mv => {
        const ilength = this.model.value ? this.model.value.length : 0;
        let countview = this.niCharLeft - ilength;
        if (countview <= Math.ceil(this.niCharLeft * 10 / 100)) {
          wrapper.style.color = this.dangerColor;
        } else {
          wrapper.style.color = this.primaryColor;
        }
        if (countview < 0) {
          countview = 0;
          this.modelValue = this.model.value.substring(countview, this.niCharLeft);
          this.model.valueAccessor.writeValue(this.modelValue);
        }
        wrapper.textContent = countview.toString() + ' ' + this.labelText;
      });
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
