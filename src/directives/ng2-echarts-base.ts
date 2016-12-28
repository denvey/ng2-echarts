/**
 * Created by denvey on 2016/12/22.
 */
import {Input, KeyValueDiffer, ElementRef, KeyValueDiffers, OnDestroy, DoCheck} from "@angular/core";

export abstract class Ng2EchartsBase implements OnDestroy, DoCheck {
  @Input('ng2-echarts') options: Object;
  hostElement: ElementRef;
  pChart: any;
  currentWidth: number;
  currentHeight: number;
  differ: KeyValueDiffer;

  constructor(ele: ElementRef, _differs: KeyValueDiffers) {
    this.hostElement = ele;
    this.differ = _differs.find({}).create(null);
  }

  public get chart(): any {
    return this.pChart;
  }

  reflow() {
    if (!this.pChart || !this.options) return;

    /*if (getComputedStyle(this.hostElement.nativeElement).transitionDuration) {
      var duration = parseFloat(getComputedStyle(this.hostElement.nativeElement).transitionDuration);
      this.pChart.reflow();
    }*/

    this.pChart.resize();
  }

  ngDoCheck() {
    if (this.currentWidth != this.hostElement.nativeElement.offsetWidth) {
      this.reflow();
      this.currentWidth = this.hostElement.nativeElement.offsetWidth;
    }
    if (this.currentHeight != this.hostElement.nativeElement.offsetHeight) {
      this.reflow();
      this.currentHeight = this.hostElement.nativeElement.offsetHeight;
    }
    if (this.differ.diff(this.options)) {
      this.draw(this.options);
    }
  }

  ngOnDestroy() {
    if (this.pChart) {
      this.pChart.dispose();
    }
  }

  abstract draw(opt: any): void;
}
