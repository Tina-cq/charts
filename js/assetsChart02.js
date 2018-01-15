/**
 * Created by jingwan on 2017/11/10.
 */
$(function () {
    $('#assetsChart02').highcharts({
        colors: ['#f8feff', '#87a9f0'],
        chart: {
//                type: 'bubble',
//                zoomType: 'xy'
            backgroundColor: 'rgba(0,0,0,0)'
        },
        title: {
            text: '',
            style: {
                color: '#fff',
                fontSize:12,
                fontWeight: 'normal'
            },
            verticalAlign:'top'
        },
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        },
        yAxis: {
            title: {
                text: ''
            },
            tickAmount: 7,
            labels:{
                style: {
                    color: '#fff',
                    fontSize:8,
                    fontWeight: 'normal'
                },
                x: -5,
                formatter: function(){
                    return this.value + "%";
                }
            },
            min: 0,
            gridLineWidth: 1,
            lineWidth: 1,
            gridLineColor: '#868a98',
            lineColor:"#868a98",
        },
        xAxis:{
            categories: ["城南","城东","城西","滨海","武清","蓟县","静海","宝坻","宁河","东丽"],
            labels:{
                style: {
                    color: '#fff',
                    fontSize:8,
                    fontWeight: 'normal'
                }

            },
            tickLength:3, //x轴刻度线长度
            lineColor:"#868a98",
        },
        legend: {
            align: 'right',
            //x: 0,
            verticalAlign: 'top',
            y:-20,
            height:10,
            floating: true,
            shadow: false,
            itemStyle: {
                color: '#fff',
                fontSize:8,
                fontWeight: 'normal'
            },
            symbolRadius:0,
            symbolHeight:5,
            symbolWidth:6,
            squareSymbol:false,
            itemMarginTop: 2,

            //itemWidth:10
        },
        series: [{
            name: '市公司',
            type: 'line',
            data: [47,25,30,18,22,42,12,20,55,15],
            marker: {
                enabled: false     //折线图转折点
            }

        },{
            name:'分公司',
            type: 'bubble',
            data: [47,20,52,6,15,36,22,33,47,32]
            // tooltip: {
            //     valueSuffix: ' mm'
            // }
        }
        ]
    });
});
