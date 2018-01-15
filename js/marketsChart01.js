/**
 * Created by jingwan on 2017/11/10.
 */
$(function () {
    $('#marketsChart01').highcharts({
        colors: ['#7c9ff8', '#e34a84'],
        chart: {
            zoomType: 'xy',
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
            floating: true,
            text: '用户增减率',
            align:'right',
            x: -50,
            y:-3,
            style: {
                color: '#fff',
                fontSize:8,
                fontWeight: 'normal'
            },
        },
        xAxis: [{
            categories: ['2012','2013','2014','2015','2016'],
            crosshair: true,
            labels: {
                //format: '{value}w',
                style: {
                    color: '#fff',
                    fontSize:8,
                    fontWeight: 'normal'
                }
            },
            y:-50,
            lineColor:"#868a98",
            tickLength:3, //x轴刻度线长度
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}w',
                style: {
                    color: '#fff',
                    fontSize:8,
                    fontWeight: 'normal'
                }
            },
            tickAmount: 8,
            min:0,
            title: {
                text: '万<br>户',
                style: {
                    fontSize:8,
                    color: '#fff',
                },
                rotation:0,
                y:-20
            },
            gridLineWidth: 1,
            lineWidth: 1,
            gridLineColor: '#868a98',
            lineColor:"#868a98",
        }, { // Secondary yAxis
            title: {
                text: '增<br>减<br>率',
                style: {
                    //color: Highcharts.getOptions().colors[0],
                    fontSize:8,
                    color: '#fff',
                },
                rotation:0,
                y:-30
            },
            tickAmount: 8,
            labels: {
                format: '{value}%',
                style: {
                    color: '#fff',
                    fontSize:8,
                    fontWeight: 'normal'
                }
            },
            opposite: true,
            gridLineWidth: 1,
            lineWidth: 1,
            gridLineColor: '#868a98',
            lineColor:"#868a98",

        }],
        tooltip: {
            shared: true
        },
        legend: {
            enabled:false
//                layout: 'vertical',
//                align: 'left',
//                x: 120,
//                verticalAlign: 'top',
//                y: 100,
//                floating: true,
//                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: '万户',
            type: 'column',
            yAxis: 1,
            data: [49, 61, 36, 29, 44],
            tooltip: {
                valueSuffix: 'w'
            },
            borderWidth:0

        }, {
            name: '增减率',
            type: 'spline',
            data: [10,50,30,40,60],
            tooltip: {
                valueSuffix: '%'
            },
            dashStyle:'dash',
            marker: {
                enabled: true,
                lineWidth:2,
                lineColor:'#fff',
                fillColor:'#e34a84',
                symbol:'circle'
            }

        }]
    });
});