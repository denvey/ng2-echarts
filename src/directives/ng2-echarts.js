"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ng2_echarts_base_1 = require("./ng2-echarts-base");
var echarts_1 = require("echarts");
var Ng2Echarts = (function (_super) {
    __extends(Ng2Echarts, _super);
    function Ng2Echarts(ele, _differs) {
        return _super.call(this, ele, _differs) || this;
    }
    Ng2Echarts.prototype.draw = function (opt) {
        if (!opt) {
            console.log('No valid options...');
            console.log(opt);
            return;
        }
        if (opt.series || opt.data) {
            if (this.pChart) {
                this.pChart.dispose();
            }
            if (!opt.chart) {
                opt.chart = {};
            }
            // opt.chart.init(this.hostElement.nativeElement);
            this.pChart = echarts_1.init(this.hostElement.nativeElement);
            this.pChart.setOption(opt);
        }
        else {
            console.log('No valid options...');
            console.dir(opt);
        }
    };
    return Ng2Echarts;
}(ng2_echarts_base_1.Ng2EchartsBase));
__decorate([
    core_1.Input('ng2-echarts')
], Ng2Echarts.prototype, "options", void 0);
Ng2Echarts = __decorate([
    core_1.Directive({
        selector: '[ng2-echarts]'
    })
], Ng2Echarts);
exports.Ng2Echarts = Ng2Echarts;
