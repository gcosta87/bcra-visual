
//Traduccion
Highcharts.setOptions({
    lang: {
        loading: 'Cargando...',
        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        exportButtonTitle: "Exportar",
        printButtonTitle: "Importar",
        rangeSelectorFrom: "Desde",
        rangeSelectorTo: "Hasta",
        rangeSelectorZoom: "Período",
        downloadPNG: 'Descargar imagen PNG',
        downloadPDF: 'Descargar como PDF',
        printChart: 'Imprimir',
        resetZoom: 'Reiniciar zoom',
        resetZoomTitle: 'Reiniciar zoom',
        thousandsSep: ".",
        decimalPoint: ',',
        viewFullscreen: 'Ver en pantalla completa',
        exitFullscreen: 'Salir de la pantalla completa',
        contextButtonTitle: 'Menu del gráfico'
    }
});

//Recuperacion de datos
Highcharts.getJSON('https://www.highcharts.com/samples/data/aapl-c.json', function (data) {
    // Create the chart
    Highcharts.stockChart('bcra-visual', {
        rangeSelector: {
            selected: 2,

            buttons: [

                {
                  type: 'week',
                  count: 1,
                  text: '1s',
                },
                {
                  type: 'week',
                  count: 2,
                  text: '2s',
                },
                {
                  type: 'month',
                  count: 1,
                  text: '1m',
                },
                {
                  type: 'month',
                  count: 3,
                  text: '3m'
                },
                {
                  type: 'month',
                  count: 6,
                  text: '6m'
                },
                {
                  type: 'ytd',
                  text: 'YTD'
                },
                {
                  type: 'year',
                  count: 1,
                  text: '1A'
                },
                {
                  type: 'all',
                  text: 'Todo'
                }
            ]

        },


    exporting: {
      buttons: {
        contextButton: {
          menuItems: [
          'viewFullscreen',
            'printChart',
            'separator',
            'downloadPNG',
            'downloadPDF'
            ]
          }
        }

    },


    chart: {
        height: 400
    },

    title: {
        text: 'Demo cotizacion'
    },


    yAxis: {
        labels: {
            formatter: function () {
                return (this.value > 0 ? ' + ' : '') + this.value + '%';
            }
        },
        plotLines: [
            {
                value: 0,
                width: 2,
                color: 'silver'
            },
            {value: 3.3, width: 1, color: 'orange', label:{text:'Inflación mensual'}, dashStyle: 'shortdash'},
            {value: 52, width: 1, color: 'red', label:{text:'Inflación interanual'}, dashStyle: 'solid'}
        ]
    },
   plotOptions: {
        series: {
            compare: 'percent',
            showInNavigator: true
        }
    },

        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
            valueDecimals: 2,
            split: true
        },
        series: [{
            name: 'Demo',
            data: data
        }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        chart: {
                            height: 300
                        },
                        subtitle: {
                            text: null
                        },
                        navigator: {
                            enabled: false
                        }
                    }
                }]
            },

        },

    );




//THEME
Highcharts.createElement('link', {
    href: 'https://fonts.googleapis.com/css?family=Dosis:400,600',
    rel: 'stylesheet',
    type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);
Highcharts.theme = {
    colors: ['#7cb5ec', '#f7a35c', '#90ee7e', '#7798BF', '#aaeeee', '#ff0066',
        '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    chart: {
        backgroundColor: null,
        style: {
            fontFamily: 'Dosis, sans-serif'
        }
    },
    title: {
        style: {
            fontSize: '16px',
            fontWeight: 'bold',
            textTransform: 'uppercase'
        }
    },
    tooltip: {
        borderWidth: 0,
        backgroundColor: 'rgba(219,219,216,0.8)',
        shadow: false
    },
    legend: {
        backgroundColor: '#F0F0EA',
        itemStyle: {
            fontWeight: 'bold',
            fontSize: '13px'
        }
    },
    xAxis: {
        gridLineWidth: 1,
        labels: {
            style: {
                fontSize: '12px'
            }
        }
    },
    yAxis: {
        minorTickInterval: 'auto',
        title: {
            style: {
                textTransform: 'uppercase'
            }
        },
        labels: {
            style: {
                fontSize: '12px'
            }
        }
    },
    plotOptions: {
        candlestick: {
            lineColor: '#404048'
        }
    }
};
// Apply the theme
Highcharts.setOptions(Highcharts.theme);



});
