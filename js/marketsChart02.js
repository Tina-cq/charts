/**
 * Created by jingwan on 2017/11/10.
 */
var chart = null;
$(function () {
    $('#marketsChart02').highcharts({
        colors: ['#56409e', '#283dc1','#0f72e1', '#03e7fe','#3c83bf', '#6dffff','#cffaff', '#ed3d8e','#002a7f', '#10389b'],
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: 'rgba(0,0,0,0)'
        },
        title: {
            floating:true,
            text: '行业分类',
            style: {
                color: '#fff',
                fontSize:12,
                fontWeight: 'normal'
            },
            align:"left",
            x:100
        },
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {  //控制指示线，指示文字
                    enabled: true,
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    format: '{y} %',
                    distance:5,  //提示文字距离圆环的距离
                    //rotation: 'auto' ,  //字围绕弧度
                    softConnector: false //指示线直角还是圆角
                },
                showInLegend: true, //是否显示图例 false不显示
                borderWidth:0,
            },
            series: {
                dataLabels: {
                    enabled: true,
                    style: {
                        color: '#fff',
                        fontSize:10,
                        fontWeight: 'normal'
                    }
                }
            }
        },
        legend: {

            align: 'right', //水平方向位置
            verticalAlign: 'top', //垂直方向位置
            layout: 'vertical',
            floating:'true',
            itemStyle: {
                color: '#fff',
                fontSize:8,
                fontWeight: 'normal'
            },
            symbolRadius:0,
            symbolHeight:5,
            symbolWidth:10,
            squareSymbol:false
            //x: 0, //距离x轴的距离
            // y: 100 //距离Y轴的距离
        },

        series: [{
            type: 'pie',
            size:"120%",
            innerSize: '80%',
            center: ['30%'],
            name: '市场份额',
            data: [
                ['城镇居民', 21],
                ['乡村居民', 2],
                ['商业、住宿餐饮业', 16],
                ['公共事业管理组织', 4],
                ['金融房地产商务及居民服务业', 4],
                ['交通运输仓储部牧业', 10],
                ['建筑业', 3],
                ['农、林、牧渔业', 13],
                ['工业', 13],
                ['信息传输计算机趋势软件业', 15],

            ]
        }]
    }, function(c) {
        // 环形图圆心
        var centerY = c.series[0].center[1],
            titleHeight = parseInt(c.title.styles.fontSize);
        c.setTitle({
            y:centerY + titleHeight/2
        });
        chart = c;
    });
});