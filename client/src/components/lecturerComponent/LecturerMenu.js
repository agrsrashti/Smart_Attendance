import {HomeOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EnrolmentContext, NavbarContext } from '../../context';

export default () => {
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substr(1);

  const { enrolCount, getEnrolCount } = useContext(EnrolmentContext);
  const { collapsed } = useContext(NavbarContext);

  return (
    <Menu  style={{backgroundColor:'rgb(14,61,31'}} theme='dark' mode='vertical' defaultSelectedKeys={[path]}>
      <Menu.Item key={'dashboard'} icon={<HomeOutlined />}>
        <Link to={'/dashboard'}>Courses</Link>
      </Menu.Item>
    </Menu>
  );
};
