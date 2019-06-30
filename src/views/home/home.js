import React from "react";
import { Row, Col } from 'antd';
import echarts from "echarts"

export default class Home extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <Row>
                    <Col span={8} style={{background:"#f40",display:"flex",justifyContent:"center",alignItems:"center",height:"100px",fontSize:"20px"}}><p>浏览量</p></Col>
                    <Col span={8} style={{background:"green",display:"flex",justifyContent:"center",alignItems:"center",height:"100px",fontSize:"20px"}}><p>订阅量</p></Col>
                    <Col span={8} style={{background:"yellow",display:"flex",justifyContent:"center",alignItems:"center",height:"100px",fontSize:"20px"}}><p>下载量</p></Col>
                </Row>
                <div>
                <Row>
                    <Col span={24} id="main" style={{width:"100%",height:"500px"}}></Col>
                </Row>
                </div>
            </div>
        )
    }
    componentDidMount(){
        var myChart = echarts.init(document.getElementById('main'));
        var option = {
            title : {
                text: '学习视频',
                subtext: '实时数据'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['浏览量','订阅量','下载量']
            },
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'浏览量',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                   
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    },
                    color: {
                        colorStops: [ {
                            offset: 1, color: '#f40' // 100% 处的颜色
                        }]
                    }
                },
                {
                    name:'订阅量',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    },
                    color: {
                        colorStops: [ {
                            offset: 1, color: 'green' // 100% 处的颜色
                        }]
                    }
                },
                {
                    name:'下载量',
                    type:'bar',
                    data:[2, 9.9, 9.0, 2.4, 8.7, 70.7, 175.6, 82.2, 4.7, 18.8, 6.0, 2.3],
                    
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    },
                    color: {
                        colorStops: [ {
                            offset: 1, color: 'yellow' // 100% 处的颜色
                        }]
                    }
                }
            ]
        };
        
        myChart.setOption(option);
    }
}