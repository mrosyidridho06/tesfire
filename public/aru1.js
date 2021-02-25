function Moin(){
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        value:'Ampere',
        data: {
            labels: [],
            datasets: [{
                label:'Arus',
                data: [{}],
                backgroundColor: [
                                'rgba(255, 99, 132, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)'
                            ],
                            borderWidth: 1
            }]
        },
            options: {
                responsive:true,
                title: {
                    display: true,
                    text: 'Chart Arus'
                },
                tooltips: {
                    mode: 'index',
                    intersect: true
                },
                annotation: {
                    annotations: [{
                    type: 'line',
                    mode: 'horizontal',
                    scaleID: 'y-axis-0',
                    value: 5,
                    borderColor: 'rgb(75, 192, 192)',
                    borderWidth: 4,
                    label: {
                        enabled: false,
                        content: 'Test label'
                    }
                    }]
                },
                scales: {
                    display:true,
                    x: {
                        type: 'time',
                        time: {
                            unit: 'month'
                        }
                    }
                }
                // scales:{
                //     yAxes:[{
                //         type:'time',
                //         time:{
                //             unit: 'day',
                //             unitStepSize: 1,
                //             displayFormats:{
                //                 'day': 'MMM DD'
                //             }
                //         }
                //     }]
                // },
                // callback: function(tickValue, index, ticks) {
                //     if (!(index % parseInt(ticks.length / 5))) {
                //       return moment.duration(tickValue/100, 's').format('mm:ss.SS');
                //     }
                // }
        }
    });

    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
        console.log(data)
    }
    // function updateScale(chart) {
    //     chart.options.scales.yAxes[{}] = {
    //         type: 'line',
    //         data:[]
    //     };
    
    // }  
    var valueRef = firebase.database().ref('PowerMetering/Home-Monitoring').child('Irms');
    valueRef.on('value', function(snapshot) {
        // removeData(myChart);
        // updateScale(myChart);
        addData(myChart,'value',snapshot.val());
        console.log(myChart)
    });

}
    window.onload = function(){
        Moin();
    }

