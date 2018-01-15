/**
 * Created by jingwan on 2017/11/10.
 */
$(function () {
    $('#serviceChart03').highcharts({
        colors: ['#25b9b2', '#2266bb','#204791'],
        chart: {
            type: 'column',
            backgroundColor: 'rgba(0,0,0,0)'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['故障', '咨询', '投诉', '举报', '表扬','建议','意见'],
            labels:{
                style: {
                    color: '#fff',
                    fontSize:8,
                    fontWeight: 'normal'
                }

            },
            tickLength:0, //x轴刻度线长度
            lineColor:"#868a98",
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            labels:{
                style: {
                    color: '#fff',
                    fontSize:8,
                    fontWeight: 'normal'
                }

            },
            gridLineWidth: 1,
            lineWidth: 1,
            gridLineColor: '#868a98',
            lineColor:"#868a98",
            tickAmount:5   //Y轴刻度数

//                stackLabels: {
//                    enabled: true,
//                    style: {
//                        fontWeight: 'bold',
//                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
//                    }
//                }
        },
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        },
        legend: {
            align: 'right',
            x: 0,
            verticalAlign: 'top',
            y: -10,
            floating: false,
            //backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            //borderColor: '#CCC',
            //borderWidth: 1,
            shadow: false,
            itemStyle: {
                color: '#fff',
                fontSize:8,
                fontWeight: 'normal'
            },
            symbolRadius:0,
            symbolHeight:5,
            symbolWidth:10,
            squareSymbol:false

            //itemWidth:10
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    '总量: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            },
            series: {
                borderWidth: 0,
            }
        },
        series: [{
            name: '受理数',
            data: [15,8,5,7,5,9,6]
        }, {
            name: '办理数',
            data: [10,18,15,8,5,6,15]
        }, {
            name: '办理率',
            data: [9,4,5,4,9,5,10]
        }]
    });
});