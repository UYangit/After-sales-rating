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
      <AntDesignDemo></AntDesignDemo>
      <Divider>图表框架Echarts</Divider>
      <EchartsDemo />
    </div>
  );
}

export default App;
