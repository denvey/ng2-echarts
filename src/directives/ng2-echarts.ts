import {Directive, ElementRef, Input, KeyValueDiffers} from '@angular/core';
import {Ng2EchartsBase} from "./ng2-echarts-base";
import * as Echarts from 'echarts';
import {every} from "rxjs/operator/every";

@Directive({
  selector: '[ng2-echarts]'
})
export class Ng2Echarts extends Ng2EchartsBase {
  @Input('ng2-echarts') options: Object;

  constructor(ele: ElementRef, _differs: KeyValueDiffers) {
    super(ele, _differs);
  }

  draw(opt: any): void {
    if (!opt) {
      console.log('No valid options...');
      console.log(opt);
      return;
    }
    if (opt.init) {
      opt.init(Echarts);
    };

    if (opt.series || opt.data) {
      if (opt.dispose) {
        this.pChart.dispose();
      }
      if (opt.clear) {
        this.pChart.clear();
      }

      /*if (!opt.chart) {
        opt.chart = {};
      }*/

      if (!this.pChart) {
        this.pChart = Echarts.init(this.hostElement.nativeElement, opt.theme ? opt.theme : 'default');
      }

      if (opt.loading) {
        this.pChart.showLoading();
      }

      this.pChart.setOption(opt);
      if (opt.loading) {
        this.pChart.hideLoading();
      }

      if (opt.dispatchAction) {
        this.pChart.dispatchAction(opt.dispatchAction);
      }

      /**
       * 取消绑定
       */
      if (opt.off) {
        for(let event of Object.keys(opt.off)) {
          this.pChart.off(event, opt.off[event])
        }
      }

      /**
       * 绑定
       */
      if (opt.on) {
        for(let event of Object.keys(opt.on)) {
          this.pChart.on(event, opt.on[event])
        }
      }

    } else {
      console.log('No valid options...');
      console.dir(opt);
    }
  }
}
