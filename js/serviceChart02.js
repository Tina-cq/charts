var myChart = echarts.init(document.getElementById('serviceChart02'));
var dataStyle = {
    normal: {
        label: {show:false},
        labelLine: {show:false}
    }
};
var placeHolderStyle = {
    normal : {
        color: 'rgba(0,0,0,0)',
        label: {show:false},
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};
option = {
    color:['#9ed0d8','#84b8ec','#2d63c0','#214ca1'],
    title: {
        text: '',
        x: 'center',
        y: 'center',
        itemGap: 20,
        textStyle : {
            color : 'rgba(30,144,255,0.8)',
            fontFamily : '微软雅黑',
            fontSize : 35,
            fontWeight : 'bolder'
        }
    },
    tooltip : {
        show: true,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : document.getElementById('serviceChart02').offsetWidth / 2,
        y : 10,
        data:['回访率','满意率','接通率','三网接通率'],
        textStyle:{
            "fontSize":8,
            "color": "#fff"
        },
        itemGap:2
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'回访率',
            type:'pie',
            clockWise:false,
            radius : [70, 85],
            center: ['45%', '65%'],
            itemStyle : dataStyle,
            data:[
                {
                    value:20,
                    name:'回访率'
                },
                {
                    value:40,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'满意率',
            type:'pie',
            clockWise:false,
            radius : [55, 70],
            center: ['45%', '65%'],
            itemStyle : dataStyle,
            data:[
                {
                    value:20,
                    name:'满意率'
                },
                {
                    value:60,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'接通率',
            type:'pie',
            clockWise:false,
            radius : [40, 55],
            center: ['45%', '65%'],
            itemStyle : dataStyle,
            data:[
                {
                    value:20,
                    name:'接通率'
                },
                {
                    value:80,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'三网接通率',
            type:'pie',
            clockWise:false,
            radius : [25, 40],
            center: ['45%', '65%'],
            itemStyle : dataStyle,
            data:[
                {
                    value:20,
                    name:'三网接通率'
                },
                {
                    value:100,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        }
    ]
};


myChart.setOption(option);
