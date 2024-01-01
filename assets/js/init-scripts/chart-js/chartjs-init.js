( function ( $ ) {
    "use strict";

    //Team chart
    var ctx = document.getElementById( "team-chart" );
    ctx.height = 170;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "2017", "2018", "2019", "2020", "2021", "2022", "2023" , "2024"],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [ {
                label: "موظف",
                data: [ 8, 10, 14, 22, 52, 70, 90 ,120],
                backgroundColor: 'rgba(0,103,255,.15)',
                borderColor: 'rgba(0,103,255,0.5)',
                borderWidth: 3.5,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(0,103,255,0.5)',
                    }, ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                display: false,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                },


            },
            scales: {
                xAxes: [ {
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                        } ],
                yAxes: [ {
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'عدد الموظفين'
                    }
                        } ]
            },
            title: {
                display: false,
            }
        }
    } );


    //Sales chart
    var ctx = document.getElementById( "sales-chart" );
    ctx.height = 170;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "2017", "2018", "2019", "2020", "2022", "2023", "2024" ],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [ {
                label: "حد ادني",
                data: [ 5000, 5500, 7000, 7200, 7600, 8000, 9000 ],
                backgroundColor: 'transparent',
                borderColor: 'rgba(220,53,69,0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(220,53,69,0.75)',
                    }, {
                label: "حد اقصي",
                data: [ 50000, 55000, 80000, 82000, 85000, 87000, 90000 ],
                backgroundColor: 'transparent',
                borderColor: 'rgba(40,167,69,0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(40,167,69,0.75)',
                    } ]
        },
        options: {
            responsive: true,

            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                },
            },
            scales: {
                xAxes: [ {
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                        } ],
                yAxes: [ {
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'جنيه مصري'
                    }
                        } ]
            },
            title: {
                display: false,
                text: 'Normal Legend'
            }
        }
    } );

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [{
      label: "الارباح السنويه",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [400215, 530102, 600251, 700841, 980021, 1490084, 1490084],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 1500000,
          maxTicksLimit: 7
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});






    //line chart
    var ctx = document.getElementById( "lineChart" );
    ctx.height = 170;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "2017", "2018", "2019", "2020", "2021", "2022", "2023" ],
            datasets: [
                {
                    label: "الصادر",
                    borderColor: "rgba(0,0,0,.09)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0,0,0,.07)",
                    data: [ 500000, 1000000, 1200000, 1300000, 2000000, 5000000, 9000000 ]
                            },
                {
                    label: "الوارد",
                    borderColor: "rgba(0, 123, 255, 0.9)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0, 123, 255, 0.5)",
                    pointHighlightStroke: "rgba(26,179,148,1)",
                    data: [ 1000000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000 ]
                            }
                        ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }

        }
    } );


    //bar chart
    var ctx = document.getElementById( "barChart" );
       ctx.height = 170;
    var myChart = new Chart( ctx, {
        type: 'bar',
        data: {
            labels: [ "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو" ],
            datasets: [
                {
                    label: "الوارد",
                    data: [ 100000, 200000, 300000, 400000, 500000, 400000, 300000 ],
                    borderColor: "rgba(0, 123, 255, 0.9)",
                    borderWidth: "0",
                    backgroundColor: "rgba(0, 123, 255, 0.5)"
                            },
                {
                    label: "الصادر",
                    data: [ 50000, 90000, 120000, 180000, 200000, 300000, 20000 ],
                    borderColor: "rgba(0,0,0,0.09)",
                    borderWidth: "0",
                    backgroundColor: "rgba(0,0,0,0.07)"
                            }
                        ]
        },
        options: {
            scales: {
                yAxes: [ {
                    ticks: {
                        beginAtZero: true
                    }
                                } ]
            }
        }
    } );

    //radar chart
    var ctx = document.getElementById( "radarChart" );
    ctx.height = 170;
    var myChart = new Chart( ctx, {
        type: 'radar',
        data: {
            labels: [ [ "البوفيه" ], [ "السفر و التنقل" ], "سكن الموظفين", [ "المرافق" ], "الانظمه الامنيه" ],
            datasets: [
                {
                    label: "مصاريف داخليه",
                    data: [ 8000, 25000, 0, 12000, 0],
                    borderColor: "rgba(0, 123, 255, 0.6)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0, 123, 255, 0.4)"
                            },
                {
                    label: "مصاريف خارجيه",
                    data: [ 0, 0, 7000, 0, 12000 ],
                    borderColor: "rgba(0, 123, 255, 0.7",
                    borderWidth: "1",
                    backgroundColor: "rgba(0, 123, 255, 0.5)"
                            }
                        ]
        },
        options: {
            legend: {
                position: 'top'
            },
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    } );


    //pie chart
    var ctx = document.getElementById( "pieChart" );
    ctx.height = 170;
    var myChart = new Chart( ctx, {
        type: 'pie',
        data: {
            datasets: [ {
                data: [ 45, 35, 13 , 2  ],
                backgroundColor: [
                                    "rgba(0, 123, 255,0.9)",
                                    "rgba(0, 123, 255,0.7)",
                                    "rgba(0, 123, 255,0.5)",
                                    "rgba(0,125,125,1)"
                                ],
                hoverBackgroundColor: [
                                    "rgba(0, 123, 255,0.9)",
                                    "rgba(0, 123, 255,0.7)",
                                    "rgba(0, 123, 255,0.5)",
                                    "rgba(0,125,125,1)"
                                ]

                            } ],
            labels: [
                            "الرحلات الداخليه",
                            "الرحلات الخارجيه",
                            "العمولات ",
                            "اخري"
                        ]
        },
        options: {
            responsive: true
        }
    } );

    //doughut chart
    var ctx = document.getElementById( "doughutChart" );
    ctx.height = 170;
    var myChart = new Chart( ctx, {
        type: 'doughnut',
        data: {
            datasets: [ {
                data: [ 75, 25 ],
                backgroundColor: [
                                    "rgba(0, 123, 255,0.9)",
                                    "rgba(0, 183, 255,0.7)",
                                ],
                hoverBackgroundColor: [
                                    "rgba(0, 123, 255,0.9)",
                                    "rgba(0, 183, 255,0.7)",
                                ]

                            } ],
            labels: [
                            "داخليه",
                            "خارجيه",
                        ]
        },
        options: {
            responsive: true
        }
    } );

    //polar chart
    var ctx = document.getElementById( "polarChart" );
    ctx.height = 170;
    var myChart = new Chart( ctx, {
        type: 'polarArea',
        data: {
            datasets: [ {
                data: [ 25, 40, 20, 13, 2 ],
                backgroundColor: [
                                    "rgba(0, 123, 255,0.9)",
                                    "rgba(0, 123, 255,0.8)",
                                    "rgba(0, 123, 255,0.7)",
                                    "rgba(0,0,0,0.2)",
                                    "rgba(0, 123, 255,0.5)"
                                ]

                            } ],
            labels: [
                            "الصيانات",
                            "محروقات",
                            "الضرايب",
                            "مصاريف الشركه",
                            "اخري"
                        ]
        },
        options: {
            responsive: true
        }
    } );

    // single bar chart
    var ctx = document.getElementById( "singelBarChart" );
    ctx.height = 170;
    var myChart = new Chart( ctx, {
        type: 'bar',
        data: {
            labels: [ "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو" ],
            datasets: [
                {
                    label: "عدد الرحلات",
                    data: [ 400, 550, 750, 810, 960, 2500, 1205 ],
                    borderColor: "rgba(0, 123, 255, 0.9)",
                    borderWidth: "0",
                    backgroundColor: "rgba(0, 123, 255, 0.5)"
                            }
                        ]
        },
        options: {
            scales: {
                yAxes: [ {
                    ticks: {
                        beginAtZero: true
                    }
                                } ]
            }
        }
    } );




} )( jQuery );