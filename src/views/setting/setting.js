import React from "react";
import { Card, Button,Pagination  } from 'antd';
import { Table } from 'antd';
import blist from "api/Blist/blist";
import XLSX from 'xlsx';
import Model from "components/modul/modul" 

// const dataSource = [
//     {
//         key: '1',
//         name: '胡彦斌',
//         age: 32,
//         phone: "12345678910",
//         address: '西湖区湖底公园1号',
//     },
//     {
//         key: '2',
//         name: '胡彦祖',
//         age: 42,
//         phone: "12345678911",
//         address: '西湖区湖底公园1号',
//     }

// ];

// const columns = [
//     {
//         title: '姓名',
//         dataIndex: 'name',
//         key: 'name',
//     },
//     {
//         title: '年龄',
//         dataIndex: 'age',
//         key: 'age',
//     },
//     {
//         title: "电话",
//         dataIndex: 'phone',
//         key: "phone"
//     },
//     {
//         title: '住址',
//         dataIndex: 'address',
//         key: 'address',
//     },
//     {
//         title: "操作",
//         key: "operation",
//         render: () => (<div><Button>删除</Button><Button>修改</Button></div>)
//     },

// ];
import {connect} from "react-redux";
import {tabvalueaction} from "action/actioncritou/actioncritou"
class Setting extends React.Component{
    constructor(){
        super();
        this.state = {
            dataSource: [],
            columns: [],
            loading: false,
            flag:true,
            moduleflag:false
        }
    }
    render(){
        let {dataSource,columns,flag,moduleflag} = this.state
        return (
                <Card title="商家列表" bordered={false} extra={<Button onClick={this.exportFile.bind(this)}>导出数据</Button>}>
                   <Table dataSource={dataSource} columns={columns} loading={flag} pagination={{
                       pageSize:2,
                       total:100,
                       onChange:this.handChange.bind(this)
                   }}/>
                   <Model parmas={moduleflag}/>
                </Card>
        )
    }
    async componentDidMount() {
        // this.fetch();
        let data = await blist();

        // console.log(data.data.list)
        let mapkeys = {
            id:"id",
            name:"商家名字",
            age:"年龄",
            phone:"商家电话",
            address:"商家地址",
            logo:"商家logo",

        }

        let columns = Object.keys(data.data.list[0]);
        columns = columns.map((item)=>{
            if (item === "logo") {
                return {
                        title: mapkeys[item],
                        dataIndex: item,
                        key: item,
                        render:(text)=>(<img src={text}/>)
                        }
            } else {
                return {
                    title: mapkeys[item],
                    dataIndex: item,
                    key: item,
                }
            }
        })
        columns.push(
            {
                title: "操作",
                key: "option",
                render:(text, record, index)=>(
                    <div>
                        <Button type="danger" onClick={this.handDele.bind(this,text, record, index)}>删除</Button>
                        <Button type="primary" onClick={this.handUpdata.bind(this,text, record, index)}>修改</Button>
                    </div>)
            }
        )

        // console.log(columns)
        if (data) {
            this.setState({
                dataSource:data.data.list,
                columns:columns,
                flag:false
            })
            
        }

        
    }
    
    handDele(text, record, index){
        // console.log(text, record)
        
    }
    handUpdata(text, record, index){
        this.setState({
            moduleflag:true
        })
        // console.log(this.props)//可以拿到定义在mapDispatchToProps里的函数,并可传参
        this.props.tabledata(record)
        
    }
    
    handChange(page,dataSize){
        // console.log(page,dataSize)
    }
    
    exportFile() {
        let data = [Object.keys(this.state.dataSource[0])];

        for (var i = 0; i < this.state.dataSource.length; i++) {
            data.push(Object.values(this.state.dataSource[i]))
            
        }
        // console.log(data)
		const ws = XLSX.utils.aoa_to_sheet(data);
		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
		XLSX.writeFile(wb, "sheetjs.xlsx")
    };
}
const mapStateToProps = (state)=>({

})
const mapDispatchToProps = (dispatch)=>({
    tabledata(val){
        dispatch(tabvalueaction(val))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Setting)