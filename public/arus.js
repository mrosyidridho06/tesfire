function arus (){
    var dbRef0 = firebase.database().ref('PowerMetering/Home-Monitoring');
    // var dbRef1 = firebase.database().ref().child("Irms");
    var dataSetFirebaseTotalActivePower1 = [];

var chartRef = dbRef0.child('Irms');
// var dataRef  = fb.child('chart_1-data');

var ctx   = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx)

var timestamp = new Date().getTime();

chartRef.endAt(timestamp).once('value', function(snap) {
  if (!snap.val()) return;

  snap.val().forEach(function(item, idx) {
    chart.addData(item);
    seg = chart.segments[idx];
    seg.data = [];

    var childRef = dataRef.child(item.label);
    childRef.endAt(timestamp).once('value', onChartData.bind(seg));
    childRef.startAt(timestamp).on('child_added', onVoted.bind(seg));
  });
});

function onVoted(snap) {
  this.data.push(snap.val());
  updateChart();
}

function onChartData(snap) {
  if (!snap.val()) return;

  var self = this;
  snap.forEach(function(item) {
    self.data.push(item.val())
  });
  updateChart();
}

function updateChart() {
  setTimeout(function() {
    chart.segments.forEach(function(item) {
      var data = item.data;
      while(data.length) {
        item.value += data.pop().value;
      }
    });

    chart.update();
  }, 100)
}
// dbRef0.on('value',function(snap) {
//     var TotalActivePower1 = snap.child('Irms').val();
//     var Time1 = snap.val().time;
//     var DataPoint = {x: Time1 ,y: TotalActivePower1};
    
    
    
// });

// Highcharts.chart('chart-arus', {
//     chart: {
//         type: 'areaspline'
//     },
//     title: {
//         text: 'Total Active Power Graph'
//     },
//     legend: {
//         layout: 'vertical',
//         align: 'left',
//         verticalAlign: 'top',
//         x: 150,
//         y: 100,
//         floating: true,
//         borderWidth: 1,
//         backgroundColor: (Highcharts.theme && 
//             Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
//     },
//     xAxis: {
//         type: 'datetime',
//         title: {
//             text: 'Time'
//         },
//         plotBands: [{ 
//             from: 4.5,
//             to: 6.5,
//             color: 'rgba(68, 170, 213, .2)'
//         }]
//     },
//     yAxis: {
//         title: {
//             text: 'Total Active Power, kWh'
//         }
//     },
//     tooltip: {
//         shared: true,
//         valueSuffix: ' units'
//     },
//     credits: {
//         enabled: false
//     },
//     plotOptions: {
//         areaspline: {
//             fillOpacity: 0.5
//         }
//     },
    
//     series: [{
//         data: dataSetFirebaseTotalActivePower1
//     }]
    
// });

// console.log(dataSetFirebaseTotalActivePower1);
// console.log(dbRef0)
    // var mypath = db.ref('PowerMetering/Home-Monitoring/Irms')
    // var fb = firebase.database().ref('PowerMetering/Home-Monitoring');
    // var chartRef = fb.child('Irms');
    // var dataRef  = fb.child('Irms');

    // var ctx = document.getElementById('chart-arus').getContext('2d');
    // var chart = new Chart(ctx).List([]);

    // var timestamp = new Date().getTime();

    // chartRef.endAt(timestamp).once('value', function(snap) {
    // if (!snap.val()) return;

    // snap.val().forEach(function(item, idx) {
    //     chart.addData(item);
    //     seg = chart.segments[idx];
    //     seg.data = [];

    //     var childRef = dataRef.child(item.label);
    //     childRef.endAt(timestamp).once('value', onChartData.bind(seg));
    //     childRef.startAt(timestamp).on('child_added', onVoted.bind(seg));
    // });
    // });

    // function onVoted(snap) {
    // this.data.push(snap.val());
    // updateChart();
    // }

    // function onChartData(snap) {
    // if (!snap.val()) return;

    // var self = this;
    // snap.forEach(function(item) {
    //     self.data.push(item.val())
    // });
    // updateChart();
    // }

    // function updateChart() {
    // setTimeout(function() {
    //     chart.segments.forEach(function(item) {
    //     var data = item.data;
    //     while(data.length) {
    //         item.value += data.pop().value;
    //     }
    //     });

    //     chart.update();
    // }, 100)
    // }
    // var myChart = new Chart(ctx, {
    //     type: 'list',
    //     data: {
    //         labels: ['Value',],
    //         datasets: [{
    //             label: '# of Whatever',
    //             data: [0],
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.2)'
    //             ],
    //             borderColor: [
    //                 'rgba(255, 99, 132, 1)'
    //             ],
    //             borderWidth: 1
    //         }]
    //     },
    //     options: {
    //         scales: {
    //             yAxes: [{
    //                 ticks: {
    //                     beginAtZero: true
    //                 }
    //             }]
    //         }
    //     }
    // });

    // function addData(chart, label, data) {
    //     chart.data.labels.push(label);
    //     chart.data.datasets.forEach((dataset) => {
    //         dataset.data.push(data);
    //     });
    //     chart.update();
    // }

    // function removeData(chart) {
    //     chart.data.labels.pop();
    //     chart.data.datasets.forEach((dataset) => {
    //         dataset.data.pop();
    //     });
    //     chart.update();
    // }

    // mypath.limitToLast(20).on('child_added', function(data) {
    //     var Tarus = data.val();
    //     $('#chart-arus').highcharts().series[0].addPoint({
    //         x: new Date(Tarus.date),
    //         y: Tarus.arus
    //     }, false);
    //     $('#chart-arus').highcharts().redraw();
    // });
    // Highcharts.chart('chart-arus', {
    //     chart: {
    //         type: 'areaspline'
    //     },
    //     title: {
    //         text: 'Arus'
    //     },
    //     legend: {
    //         layout: 'vertical',
    //         align: 'left',
    //         verticalAlign: 'top',
    //         x: 150,
    //         y: 100,
    //         floating: true,
    //         borderWidth: 1,
    //         backgroundColor: (Highcharts.theme && 
    //             Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    //     },
    //     xAxis: {
    //         type: 'datetime',
    //         title: {
    //             text: 'Time'
    //         },
    //         plotBands: [{ 
    //             from: 4.5,
    //             to: 6.5,
    //             color: 'rgba(68, 170, 213, .2)'
    //         }]
    //     },
    //     yAxis: {
    //         title: {
    //             text: 'Ampere'
    //         }
    //     },
    //     tooltip: {
    //         shared: true,
    //         valueSuffix: ' units'
    //     },
    //     credits: {
    //         enabled: false
    //     },
    //     plotOptions: {
    //         areaspline: {
    //             fillOpacity: 0.5
    //         }
    //     },
    //     series: [{
    //         name: 'Arus',
    //         yAxis:0
    //     }]
        
    // });
}
    
window.onload = function(){
    arus();
}

// animation: true,
//             tooltips: {
//                 callbacks: {
//                   title(datasets) {
//                   var time = new Date(datasets[0].xLabel * 1000);
//                     return (time.getMonth() + 1) + 'Arus' + time.getDate() + ' ' + time.getHours();
//                 }
//               }
//             },
//             scales: {
//                 xAxes: [
//                   {
//                     type: 'linear',
//                     position: 'bottom',
//                     ticks: {
//                       callback(value) {
//                         var time = new Date(value * 1000);
//                         return (time.getMonth() + 1) + 'Arus' + time.getDate() + ' ' + time.getHours();
//                       }
//                     }
//                   }
//                 ]
//             }