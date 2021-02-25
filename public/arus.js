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
 // $(document).ready(function () {
    //     // initialize Global variables
    //     var dataArr = [];
    //     var previousVal = '';
    //     var compareVal ='';
    //     var chartCount ;
    //     var currentFnD='';
    //     var ref = firebase.database().ref('PowerMetering/Home-Monitoring');
    //     function getData() {
            
    //         ref.on("child_added", function (snapshot) {
    //             var obj = snapshot.child('Irms').val();
    //             currentFnd=obj;
    //             if (currentFnd === previousVal && typeof obj !=='undefined') {
    //                 chartCount++;
    //                 //currentFnD=obj.foodAndDrinks;
    //             }
    //             else if(typeof obj ==='undefined' || obj === ''){
    //                 console.log(chartCount, obj.label);
    //                 chartCount=0;
    //             }
    //             else if (currentFnd !== previousVal && typeof obj !=='undefined'  || obj !== ' ' || obj !== "null") {
    //                 chartCount++;
    //                 dataArr = ({
    //                     label: previousVal,
    //                     value: chartCount,
    //                 });
                
    //                 chartCount = 0;
    //                 previousVal = obj;
    //                 //currentFnd=obj.foodAndDrinks;
    //             }
            
    //           // Verify that values are defined and push data into the chart    
    //             if(typeof dataArr.label !== 'undefined' && typeof dataArr.value !=='undefined'){
    //                if(dataArr.label !== compareVal){
    //                     addData(myChart, dataArr.label, dataArr.value);
    //                     compareVal = dataArr.label;
    //                }     
                   
                    
    //             }
                
    //             // var unique = $.makeArray($(dataArr).filter(function(i,itm){
    //             //     return i == $(dataArr).index(itm);
    //             // })); 
    
    //         });
    
    //     }
    
    //     window.chartColors = {
    //         red: 'rgb(255, 99, 132)',
    //         orange: 'rgb(255, 159, 64)',
    //         yellow: 'rgb(255, 205, 86)',
    //         green: 'rgb(75, 192, 192)',
    //         blue: 'rgb(54, 162, 235)',
    //         purple: 'rgb(153, 102, 255)',
    //         grey: 'rgb(201, 203, 207)'
    //     };
    //   // Initialize the Chart Element on HTML 
        // var ctx = document.getElementById("myChart").getContext("2d");
        // options = {
    //         scales: {
    //             xAxes: [{
    //                 barPercentage: 0.5,
    //                 barThickness: 6,
    //                 maxBarThickness: 8,
    //                 minBarLength: 2,
    //                 gridLines: {
    //                     offsetGridLines: true
    //                 },
    //                 yAxes: [{
    //                     ticks: {
    //                         min: 0,
    //                         max: 100,
    //                         stepSize: 10
    //                     }
    //                 }]
    //             }],
    //             layout: {
    //                 padding: {
    //                     left: 50,
    //                     right: 0,
    //                     top: 0,
    //                     bottom: 0
    //                 }
    //             }
    //         }
    //     }
    //     // Set the configuration of the Chart elements.
    //     // This is where we pass the data we captured from firebase to the chart label and data
    //     var config = {
    //         type: 'line',
    //         data: {
    //             labels: dataArr.label,       // value of label retrieved from firebase
    //             datasets: [{
    //                 label: "User Views by Cuisine",
    //                 backgroundColor: "rgb(255, 159, 64)",
    //                 borderColor: "rgba(54, 162, 235, 1)",
    //                 borderWidth: 1,
    //                 data: dataArr.value     // value of search for each of the array elements
    //             }],
    //             responsive: true,
    //             options: options
    
    //         }
    //     };
    
    //     // Create new chart element context with refrence to the HTML element
    //     var myChart = new Chart(ctx, config);
    
       
    //     // Put data into the dataset for the chart and update the chart
    //     function addData(chart, label, data) {
    //         chart.data.labels.push(label);
    //         chart.data.datasets.forEach((dataset) => {
    //             dataset.data.push(data);
    //         });
    //         chart.update();
    //     }
    //     // Call the function which initiates the chart setup
    //     getData();
    // })
    // var moment = require('moment'); // require
    // moment().format(); 
    // Use moment.updateLocale(localeName, config)
    // moment.defineLocale(localeName, config)
    // const a = '08-01-2019';
    // const outputDateFormat = 'MM-DD-YYYY';
    // const b = moment(a, 'MM-DD-YYYY').add(1, 'years').add(-1, 'days').format(outputDateFormat);
    // console.log(b);