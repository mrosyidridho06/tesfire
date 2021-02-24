function Moin(){
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
    //     var ctx = document.getElementById("myChart").getContext("2d");
    //     options = {
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
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: 'Arus',
//         datasets: [
//           {
//             data: [0],
//           }
//         ]
//       },
//       options: {
//         scales: {
//           xAxes: [ {
//               display: true,
//               type: 'time',
//               time: {
//                 parser: 'MM/DD/YYYY HH:mm',
//                 tooltipFormat: 'll HH:mm',
//                 unit: 'day',
//                 unitStepSize: 1,
//                 displayFormats: {
//                   'day': 'MM/DD/YYYY'
//                 }
//               }
//             }
//           ],
//           yAxis: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             // etc...
//           }],
//         }
//       }
//     }
//   );
        type: 'line',
        data: {
            labels: ['Value'],
            dataset: [{
                labels:'Arus',
                data:[]
            }]
            // value:'Arus',
            // data: {
            //     datasets: [{
            //         labels: 'Arus',
            //         data:[{}],
            //         backgroundColor: [
            //             'rgba(255, 99, 132, 0.2)'
            //         ],
            //         borderColor: [
            //             'rgba(255, 99, 132, 1)'
            //         ],
            //         borderWidth: 1
                
            //     }]
            // },
            
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'time',
                    distribution: 'series',
                    time:{
                        unit: 'second'
                    }
                }],
                yAxes: [{
                    ticks: {
                            beginAtZero: true
                    }
                }]
            }
        },
    })

    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
        console.log(data)
    }

    function removeData(chart) {
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chart.update();
        
    }
    var valueRef = firebase.database().ref('PowerMetering/Home-Monitoring').child('Irms');
    valueRef.on('value', function(snapshot) {
      removeData(myChart);
      addData(myChart,'Value',snapshot.val());
      console.log(addData)
    });
    
}


window.onload = function(){
    Moin()
}
// callback: function(tickValue, index, ticks) {
//     if (!(index % parseInt(ticks.length / 5))) {
//       return moment.duration(tickValue/100, 's').format('mm:ss.SS');
//     }
// }
