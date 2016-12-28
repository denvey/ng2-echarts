"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by denvey on 2016/12/22.
 */
var core_1 = require("@angular/core");
var ng2_echarts_1 = require("../directives/ng2-echarts");
var Ng2EchartsModule = (function () {
    function Ng2EchartsModule() {
    }
    return Ng2EchartsModule;
}());
Ng2EchartsModule = __decorate([
    core_1.NgModule({
        declarations: [ng2_echarts_1.Ng2Echarts],
        exports: [ng2_echarts_1.Ng2Echarts]
    })
], Ng2EchartsModule);
exports.Ng2EchartsModule = Ng2EchartsModule;
