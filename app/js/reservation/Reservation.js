/**
 * Created by xiucheren on 16/12/9.
 */

import React from  'react';
import {
  Container,
  Group,
  List,
  Button
}from 'amazeui-touch';
// import '../../style/reservation.scss';
require('../../style/reservation.scss');
import{
  createStore
} from 'redux';
import {
  hashHistory
} from 'react-router'
export default class Reservation extends React.Component{
  componentDidMount(){
    document.title = "预约";
  }
  render(){
    return (<Container scrollable>
      <Group noPadded>
        <List>
          <List.Item title = "车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;辆"/>
          <List.Item title = "服务种类"/>
          <List.Item title = "行驶里程" after={<input placeholder="输入行驶里程"/>}/>
        </List>
      </Group>
      <Group noPadded>
        <List>
          <List.Item title = "车&nbsp;&nbsp;牌&nbsp;&nbsp;号" after={<input className="" placeholder="请填写车牌号"/>}/>
          <List.Item title = "到店时间"/>
        </List>
      </Group>
      <Button amStyle="alert" style={{width:'calc(100% - 30px)',margin:'15px',borderRadius:'5px'}} onClick={()=>{
        hashHistory.goBack();

      }}>立即预约</Button>
    </Container>);
  }
}
