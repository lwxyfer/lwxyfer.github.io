require.config({
            paths: {
                echarts: './'
            }
        });        
        require(
            [
                'echarts',
                'echarts/chart/bar',
                'echarts/chart/line',
                'echarts/chart/pie',
            ],
             function (ec) {
                  var onechart = ec.init(document.getElementById('one'),'macarons');

                onechart.showLoading({
                text : 'ACE-TEAM \n 任务二 | 数据图表\n Made by LWXYFER',                
                effect : 'bar',
                textStyle : {
                     fontSize : 30
                 },
                
                });                
                  var option = {
                    title : {
                        text:'AQI',
                        subtext:'AQI数据图表--ACE',
                        x:'center',
                        y:'bottom',
                        paddingLeft: -190,
                    },
                    grid : {
                        x:60,
                        y:20,
                        y2: 70,
                        x2:60
                    },
                    tooltip : {
                        trigger: 'item'
                    },
                    xAxis : [
                        {
                            type:'category',
                            data: (function () {
                                var myarr=[];
                                for(var i=0;i<=50;i++) {
                                    myarr.push(i);
                                }
                                return myarr;
                            })(),
                        }
                    ],
                    yAxis : [
                        {
                            type: 'value',

                        }
                    ],
                    series : [
                        {
                            name:"AQI",
                            type:'line',
                            data: setValue.peak(bjbj,7),
                            itemStyle : {
                                normal : {
                                    color: '#37C9CB',
                                }
                            }                            
                        }
                    ],                
                }
                //onechart.setOption(option);
                loadingTicket = setTimeout(function (){
                onechart.hideLoading();
                onechart.setOption(option);
                clearTimeout(loadingTicket);
                    },3000);

                var all = document.getElementById('main').getElementsByTagName('li');   
                var myform = [bjbj,'bar',7,0];
                var mycity = [bjbj,shsh,gzgz];
                var mychart = ['line','bar','pie'];               
                    all[0].onclick = function () {
                        var dd= mycity[0];
                        var lx= myform[1];
                        var sj= myform[2];
                        var sm= myform[3];
                        if( sm== 0) { option.series[0].data = setValue.peak(dd,sj)};
                        if( sm== 1) { option.series[0].data = setValue.average(dd,sj)};
                        if( sm== 2) { option.series[0].data = setValue.low(dd,sj)};
                        option.series[0].itemStyle.normal.color = '#37C9CB';
                        onechart.setOption(option,notMerge=true);
                        myform[0] = mycity[0];
                        all[0].style.borderBottom="3px solid green";                        
                        all[1].style.borderBottom="0px";                        
                        all[2].style.borderBottom="0px";                        

                    };                    
                    all[1].onclick = function () {
                        var dd= mycity[1];
                        var lx= myform[1];
                        var sj= myform[2];
                        var sm= myform[3];
                        if( sm ==0) { option.series[0].data = setValue.peak(dd,sj)};
                        if( sm== 1) { option.series[0].data = setValue.average(dd,sj)};
                        if( sm== 2) { option.series[0].data = setValue.low(dd,sj)};
                        option.series[0].itemStyle.normal.color = '#f36022';
                        onechart.setOption(option,notMerge=true);
                        myform[0] = mycity[1];
                        all[0].style.borderBottom="0px";                        
                        all[1].style.borderBottom="3px solid green";                        
                        all[2].style.borderBottom="0px";
                    };
                    all[2].onclick = function () {
                        var dd= mycity[2];
                        var lx= myform[1];
                        var sj= myform[2];
                        var sm= myform[3];
                        if( sm== 0) { option.series[0].data = setValue.peak(dd,sj)};
                        if( sm== 1) { option.series[0].data = setValue.average(dd,sj)};
                        if( sm== 2) { option.series[0].data = setValue.low(dd,sj)};
                        option.series[0].itemStyle.normal.color = '#0095DD';
                        onechart.setOption(option,notMerge=true);
                        myform[0] = mycity[2];
                        all[0].style.borderBottom="0px";                        
                        all[1].style.borderBottom="0px";                        
                        all[2].style.borderBottom="3px solid green";

                    };
                    all[3].onclick = function () {
                        option.series[0].type= 'line';
                        onechart.setOption(option,notMerge=true);
                        all[3].style.borderBottom="3px solid green";                        
                        all[4].style.borderBottom="0px";
                    };
                    all[4].onclick = function () {
                        option.series[0].type= 'bar';
                        onechart.setOption(option,notMerge=true);
                        all[4].style.borderBottom="3px solid green";                        
                        all[3].style.borderBottom="0px";
                    };
                    all[5].onclick = function () {
                        option.series[0].type= 'pie';
                        onechart.setOption(option,notMerge=true);
                    };
                    all[6].onclick = function () {
                        var dd= myform[0];
                        var lx= myform[1];
                        var sj= 7;
                        var sm= myform[3];
                        if( sm== 0) { option.series[0].data = setValue.peak(dd,sj)};
                        if( sm== 1) { option.series[0].data = setValue.average(dd,sj)};
                        if( sm== 2) { option.series[0].data = setValue.low(dd,sj)};         
                        option.xAxis[0].data = (function () {
                                var myarr=[];
                                for(var i=0;i<=50;i++) {
                                    myarr.push(i);
                                }
                                return myarr;
                            })();
                        onechart.setOption(option,notMerge=true);
                        myform[2] = 7;
                        all[6].style.borderBottom="3px solid green";                        
                        all[7].style.borderBottom="0px";                        
                        all[8].style.borderBottom="0px"; 
                    };
                    all[7].onclick = function () {
                        var dd= myform[0];
                        var lx= myform[1];
                        var sj= 30;
                        var sm= myform[3];
                        if( sm== 0) { option.series[0].data = setValue.peak(dd,sj)};
                        if( sm== 1) { option.series[0].data = setValue.average(dd,sj)};
                        if( sm== 2) { option.series[0].data = setValue.low(dd,sj)};
                        option.xAxis[0].data = [1,2,3,4,5,6,7,8,9,10,11,12]
                        onechart.setOption(option,notMerge=true);
                        myform[2] = 30;
                        all[7].style.borderBottom="3px solid green";                        
                        all[6].style.borderBottom="0px";                        
                        all[8].style.borderBottom="0px"; 
                    };
                    all[8].onclick = function () {
                        var dd= myform[0];
                        var lx= myform[1];
                        var sj= 90;
                        var sm= myform[3];
                        if( sm== 0) { option.series[0].data = setValue.peak(dd,sj)};
                        if( sm== 1) { option.series[0].data = setValue.average(dd,sj)};
                        if( sm== 2) { option.series[0].data = setValue.low(dd,sj)};
                        option.xAxis[0].data = [1,2,3,4]
                        onechart.setOption(option,notMerge=true);
                        myform[2] = 90;
                        all[8].style.borderBottom="3px solid green";                        
                        all[6].style.borderBottom="0px";                        
                        all[7].style.borderBottom="0px";
                    };
                    all[9].onclick =function () {
                        var dd= myform[0];
                        var lx= myform[1];
                        var sj= myform[2];
                        var sm= myform[3];
                        option.series[0].data = setValue.peak(dd,sj);                      
                        onechart.setOption(option,notMerge=true);
                        myform[3] = 0;
                        all[9].style.borderBottom="3px solid green";                        
                        all[10].style.borderBottom="0px";                        
                        all[11].style.borderBottom="0px";
                    };
                    all[10].onclick =function () {
                        var dd= myform[0];
                        var lx= myform[1];
                        var sj= myform[2];
                        var sm= myform[3];
                        option.series[0].data = setValue.average(dd,sj);
                        onechart.setOption(option,notMerge=true);
                        myform[3] = 1;
                        all[10].style.borderBottom="3px solid green";                        
                        all[11].style.borderBottom="0px";                        
                        all[9].style.borderBottom="0px";
                    };
                    all[11].onclick =function () {
                        var dd= myform[0];
                        var lx= myform[1];
                        var sj= myform[2];
                        var sm= myform[3];
                        option.series[0].data = setValue.low(dd,sj);
                        onechart.setOption(option,notMerge=true);
                        myform[3] = 2;
                        all[11].style.borderBottom="3px solid green";                        
                        all[9].style.borderBottom="0px";                        
                        all[10].style.borderBottom="0px";
                    };                
            }            
        );       