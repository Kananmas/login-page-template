import React from 'react';
import Signpanel from './components/Signpanel';
import { Col, Row } from 'antd';
import Carouselpanel from './components/Carouselpanel';
import './styles/App.css'

function App() {
  return (
    <Row className='main'>
      <Col span={12} style={{ backgroundColor: '#f5f7f9' }}>
        <Carouselpanel />
      </Col>
      <Col span={12}>
        <Signpanel />
      </Col>
    </Row>
  );
}

export default App;