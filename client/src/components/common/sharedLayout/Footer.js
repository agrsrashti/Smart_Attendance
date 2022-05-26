import { Layout } from 'antd';
import React from 'react';

const { Footer } = Layout;
export default () => (
  <Footer style={{ textAlign: 'center' ,backgroundColor:"rgb(14,61,31) " }}>
    <span style={{ color: 'white' }}>&copy; Smart Attendance {new Date().getFullYear()}</span>
  </Footer>
);
