/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-01-29 14:04:05
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-02-01 17:15:23
 * @FilePath: /DailyLearning/demo/2023/backOfficeSystem/src/pages/dataTotal/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button, Col, Form, Input, Row, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useEffect, useState }  from "react";
import "./index.scss"
interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}
const DataTotal: React.FC = ()=>{
    const [form] = Form.useForm();
    const [spanSize, setSpanSize] = useState<number>(8);
    const columns: ColumnsType<DataType> = [
        {
          title: 'Name',
          dataIndex: 'name',
          width: 150,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          width: 150,
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
    ];
    const data: DataType[] = [];
    for (let i = 0; i < 100; i++) {
        data.push({
          key: i,
          name: `Edward King ${i}`,
          age: 32,
          address: `London, Park Lane no. ${i}`,
        });
      }
    const onFinish = (values: any) => {
      console.log('Finish:', values);
    };
    const resizeUpdate = (e:any) => {
        const w = e.target.innerWidth;// 通过事件对象获取浏览器窗口的高度
        console.log(w);
        if( w < 600 ) {
            setSpanSize(24);
        } else if(w < 1040){
            setSpanSize(12);
        } else if(w < 1400){
            setSpanSize(8);
        } else if( w< 1800){
            setSpanSize(6);
        } else if(w< 1920 ){
            setSpanSize(4.8);
        } else {
            setSpanSize(4);
        }
    }
    useEffect(()=>{
        const w = window.innerWidth;// 页面刚加载完成后获取浏览器窗口的大小
        if( w < 600 ) {
            setSpanSize(24);
        } else if(w < 1040){
            setSpanSize(12);
        } else if(w < 1400){
            setSpanSize(8);
        } else if( w< 1800){
            setSpanSize(6);
        } else if(w< 1920 ){
            setSpanSize(4.8);
        } else {
            setSpanSize(4);
        }
        window.addEventListener('resize', resizeUpdate);// 页面变化时获取浏览器窗口的大小 
        return () => {
            window.removeEventListener('resize', resizeUpdate);// 组件销毁时移除监听事件
        };
    },[])
    return (
        <div className="dataTotal">
            <div className="searchFormBox">
                <Form form={form} name="horizontal_login" labelCol={{span:5}} wrapperCol={{span:19}} layout="inline" onFinish={onFinish}>
                    <Row gutter={[10, 10]} style={{ width: '100%' }}>
                        {/* 
                            1. input\radio\checkbox span={spanSize}
                            2. rangerPickter span={2*spanSize}
                        */}
                        <Col className="gutter-row" span={spanSize}>
                            <Form.Item label="字段1" name="orderId">
                                <Input type="text" placeholder="请输入字段1" allowClear className="w100p"/>
                            </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={spanSize}>
                            <Form.Item label="字段2" name="mobile">
                                <Input type="text" placeholder="请输入字段2" allowClear className="w100p"/>
                            </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={spanSize}>
                            <Form.Item label="字段3" name="mobile">
                                <Input type="text" placeholder="请输入字段3" allowClear className="w100p"/>
                            </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={spanSize}>
                            <Form.Item label="字段4" name="mobile">
                                <Input type="text" placeholder="请输入字段4" allowClear className="w100p"/>
                            </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={spanSize}>
                            <Form.Item label="字段5" name="mobile">
                                <Input type="text" placeholder="请输入字段5" allowClear className="w100p"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row className="mt10 mla">
                        <Button className="mr10"> 重置</Button>
                        <Button type="primary"> 提交</Button>
                    </Row>
                </Form>
            </div>
            <div className="searchResultBox">
                <Table 
                    columns={columns} 
                    dataSource={data} 
                    pagination={{ pageSize: 10 }} 
                    scroll={{ y: 240 }}
                >
                </Table>
            </div>
        </div>
    )
}
export default DataTotal