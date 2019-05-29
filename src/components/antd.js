import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'

class AntDesignDemo extends Component {
    constructor(props) {
        super(props)  
    }

    render() {
        return <DatePicker />
    }
}

export default AntDesignDemo;