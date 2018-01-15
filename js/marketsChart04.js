/**
 * Created by jingwan on 2017/11/10.
 */
$(function () {
    $('#marketsChart04').highcharts({
        colors: ['#56409e', '#283dc1','#0f72e1', '#03e7fe','#3c83bf', '#6dffff','#cffaff', '#ed3d8e','#002a7f', '#10389b'],
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: 'rgba(0,0,0,0)'
        },
        title: {
            text: '用电类别',
            align: 'center',
            verticalAlign: 'middle',
            y: 60,
            style: {
                color: '#fff',
                fontSize:18,
                fontWeight: 'normal'
            },
        },
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        credits: {
            enabled:false
        },
        exporting: {
            enabled:false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance:0,  //提示文字距离圆环的距离
                    style: {
                        fontWeight: 'normal',
                        color: 'white',
                        fontSize:10
                    },
                    rotation: 'auto'
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '130%'],
                borderWidth:0
            }
        },
        series: [{
            type: 'pie',
            name: '用电类别',
            size:"220%",
            innerSize: '80%',
            data: [
                ['大工业',10],
                ['居民',13],
                ['农业生产',12],
                ['工商业',7],
                ['趸售 ',17],
                ['大用户直购',15],
                ['抽水蓄能',9],
                ['分布能源',5],
                ['其他',12]
            ]
        }]
    });
});
