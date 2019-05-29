import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/antd'
import AntDesignDemo from './components/antd';
import EchartsDemo from './components/echarts'
import { Table, Divider, Tag} from 'antd';

function App() {
  return (
    <div className="App">
      <Divider>UI框架AntDesign</Divider>
      <a href="https://ant.design/docs/react/introduce-cn" />
      <AntDesignDemo></AntDesignDemo>
      <Divider>图表框架Echarts</Divider>
      <a href="https://echarts.baidu.com/examples/" />
      <EchartsDemo />
    </div>
  );
}

export default App;
