/**
 * Created by jingwan on 2017/11/10.
 */
$(function () {
    $('#marketsChart03').highcharts({
//            colors: ['#2e79b3', '#ff424a'],
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
            align:'right',
            text: '<span style="color: #e16c41;">●</span> 合同容量 　<span style="color: #1bcfc3;">●</span> 运行容量',
            x: -150,
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
            tickLength:3, //x轴刻度线长度
            lineColor:"#868a98",
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}VA',
                style: {
                    color: '#fff',
                    fontSize:8,
                    fontWeight: 'normal'
                }
            },
            tickAmount: 8,
            min:0,
            title: {
                text: '万<br>千<br>伏<br>安',
                style: {
                    fontSize:8,
                    color: '#fff',
                },
                rotation:0,
                y:-40
            },
            gridLineWidth: 1,
            lineWidth: 1,
            gridLineColor: '#868a98',
            lineColor:"#868a98",
        }, { // Secondary yAxis
            title: {
                text: '增<br>减<br>率',
                style: {
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
                    fontSize:8,
                    color: '#fff',
                },
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
     },
        series: [{
            name: '万千伏安',
            type: 'column',
            yAxis: 1,
            data: [49, 61, 36, 29, 44],
            tooltip: {
                valueSuffix: 'VA'
            },
            color: "#7a95f1",
            borderWidth:0
        }, {
            name: '万千伏安',
            type: 'column',
            yAxis: 1,
            data: [30, 21, 46, 19, 50],
            tooltip: {
                valueSuffix: 'VA'
            },
            color: "#ff7243",
            borderWidth:0
        },{
            name: '增减率',
            type: 'line',
            data: [10,50,30,40,60],
            tooltip: {
                valueSuffix: '%'
            },
            color: "#21cccc"

        },{
            name: '增减率',
            type: 'line',
            data: [20,40,43,31,50],
            tooltip: {
                valueSuffix: '%'
            },
            color: "#f76b27"

        }]
    });
});