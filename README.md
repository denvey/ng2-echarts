# ng2-echarts

## 简介

主要基于ng2封装echarts，修改于ng2-highcharts

```bash
$ npm install --save echarts angular2@2.0.0-beta.0 es6-promise@^3.0.2 es6-shim@^0.33.3 reflect-metadata@0.1.2 rxjs@5.0.0-beta.0 zone.js@0.5.10
```

Then, install this library running:

```bash
$ npm install --save ng2-echarts
```

## 使用

## 使用 [Angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)

* Install required packages : `echarts` and `ng2-echarts`
  ```
  npm install --save echarts ng2-echarts
  ```
* Import `Ng2Echarts` in the component
  ```
  import { Ng2Echarts } from 'ng2-echarts';
  ```
* Include `Ng2Echarts` in the directives
  ```
  @Component({
    template: require('./template.html'),
    directives: [
      Ng2Echarts
    ]
  })
  export class UsingNg2EchartsComponent {

  }
  ```
* Prepare Chart Data

  ```
  private chartData = {
    theme: '',
      event: [
        {
          type: "click",
          cb: function (res) {
            console.log(res);
          }
        }
      ],
      title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [{
        name: '访问来源',
        type: 'pie',
        startAngle: -180,
        radius: '55%',
        center: ['50%', '60%'],
        data: [{
          value: 335,
          name: '直接访问'
        }, {
          value: 310,
          name: '邮件营销'
        }, {
          value: 234,
          name: '联盟广告'
        }, {
          value: 135,
          name: '视频广告'
        }, {
          value: 1548,
          name: '搜索引擎'
        }],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
  };
  ```
* Update template with the required directive
  ```
  <div [ng2-echarts]="chartData"></div>
  ```

## 支持echarts
- on
- off
- dispatchAction
- dispose
- clear

```
option = {
  on: {
    brushselected: this.renderBrushed,
    click: function(params) {

    }
  },
  off: {
    brushselected: this.renderBrushed
  },
  dispatchAction: {
    type: 'brush',
    areas: [
      {
        geoIndex: 0,
        brushType: 'polygon',
        coordRange:
      }
    ]
  }
}
```



## Changelog

Look at [changelog page](CHANGELOG.md)

## Contributors



## License

