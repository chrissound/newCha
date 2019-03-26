import * as Highcharts from "highcharts";
document.addEventListener('DOMContentLoaded', function () {
      var myChart = Highcharts.chart('container', {
          chart: {
              type: 'bar'
          },
          title: {
              text: 'Fruit Consumption'
          },
          xAxis: {
              categories: ['Apples', 'Bananas', 'Oranges']
          },
          yAxis: {
              title: {
                  text: 'Fruit eaten'
              }
          },
          series: [{
              name: 'Jane',
              data: [1, 0, 4]
          }, {
              name: 'John',
              data: [add(100,200), 5, 7, 3]
          }]
      });
  });

function add(x: number, y: number): number {
	return x + y;
}
