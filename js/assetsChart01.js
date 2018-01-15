/**
 * Created by jingwan on 2017/11/10.
 */
$(function () {
    // Parse the data from an inline table using the Highcharts Data plugin
    $('#assetsChart01').highcharts({
        colors: ['#1c2a49', '#2e6aba','#8cb0fb'],
        data: {
            table: 'freq',
            startRow: 1,
            endRow: 10,
            endColumn: 3
        },
        chart: {
            polar: true,
            type: 'column',
            backgroundColor: 'rgba(0,0,0,0)'
        },
        title: {
            text: ''
        },
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        },
        subtitle: {
            text: ''
        },
        pane: {
            size: '90%',
            center: ['40%']
        },
        legend: {
            align: 'right',
            verticalAlign: 'bottom',
            y: 10,
            x:10,
            layout: 'vertical',
            floating: true,
            itemStyle: {
                color: '#fff',
                fontSize:8,
                fontWeight: 'normal'
            },
            symbolRadius:0,
            symbolHeight:10,
            symbolWidth:5,
            squareSymbol:false
        },
        xAxis: {
            tickmarkPlacement: 'between',
            lineColor: "#fff",
            gridLineColor: 'rgba(0,0,0,0)',
            labels:{
                style: {
                    color: '#fff',
                    "fontSize": "8px"

                },
                distance: 5,
                rotation: 'auto'   //◊÷Œß»∆ª°∂»
            }
        },
        yAxis: {
            min: 0,
            endOnTick: false,
            showLastLabel: true,
            gridLineColor: 'rgba(0,0,0,0)',
            title: {
                text: ''
            },
            labels:{
                enabled: false   //»•µÙy÷·øÃ∂»÷µ

            },
//                labels: {
//                    formatter: function () {
//                        return this.value + '%';
//                    }
//                },
            reversedStacks: true

        },
        tooltip: {
            valueSuffix: '%'
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                shadow: false,
                groupPadding: 0,
                pointPlacement: 'on'

            }
        }
    });
});