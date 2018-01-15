/**
 * Created by jingwan on 2017/11/10.
 */
$("#assetsChart03").highcharts({
    colors: ['#183c86', '#1975be','#fff'],
    chart: {
        backgroundColor: 'rgba(0,0,0,0)'
//            type: 'areaspline'
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
    pane: {
        size: '100%'
    },
    plotOptions: {
        series: {
            marker: {
                enabled: false
            },
        }
    },
    legend: {
        align: 'right', //水平方向位置
        verticalAlign: 'top', //垂直方向位置
        floating: true,
        y:-20,
        itemStyle: {
            color: '#fff',
            fontSize:8,
            fontWeight: 'normal'
        },
        symbolRadius:0,
        symbolHeight:5,
        symbolWidth:10,
        squareSymbol:false,
        //x: 0, //距离x轴的距离
        // y: 100 //距离Y轴的距离
    },
    xAxis: {
        categories: ["城南","城东","城西","滨海","武清","城南","城东","城西","滨海","武清"],
        tickWidth:0,
        labels:{
            style: {
                color: '#fff',
                fontSize:8,
                fontWeight: 'normal'
            },
        },
        lineColor:"#868a98",
        /*plotBands: [{ // visualize the weekend
         from: 4.5,
         to: 6.5,
         color: 'rgba(68, 170, 213, .2)'
         }]*/
    },
    yAxis: {
        title: {
            text: ''
        },
        labels:{
            style: {
                color: '#fff',
                fontSize:8,
                fontWeight: 'normal'
            },
        },
//            max:5, // 定义Y轴 最大值
        min:0, // 定义最小值
        //tickInterval: 1,
        //tickPositions: [-10, -5, 0, 5], // 指定竖轴坐标点的值
        tickAmount:5,  //Y轴刻度数
        gridLineWidth: 1,
        lineWidth: 1,
        gridLineColor: '#868a98',
        lineColor:"#868a98",
    },
    tooltip: {
        shared: true,
        valueSuffix: '%',
        shadow: false,
        borderWidth:0,
        backgroundColor:"rgba(235,235,235,0.6)",
        borderRadius:5,
        style: {
            "color": "#a6aebd"
        }
    },


    series: [{
        name: '市公司调整',
        data: [12,32,18,23,35,12,32,18,23,35],
        type: 'areaspline',
        fillColor:'#183c86'       // 设置渐变的填充颜色


    }, {
        name: '计划量',
        data: [24,13,17,32,25,24,13,17,32,25],
        type: 'areaspline',
        fillColor:'#1c74bb'
    },{
        name: '实际完成量',
        data: [10,15,24,20,30,10,15,24,20,30],
        type: 'line',
        lineWidth: 0.5,
        marker: {
            enabled: true,
            lineWidth:2,
            lineColor:'#fff',
            fillColor:'green',
            symbol:'circle'
        }
    }]
});
