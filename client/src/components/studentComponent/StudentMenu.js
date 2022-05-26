import {HomeOutlined,PictureOutlined,} from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { NavbarContext } from '../../context';

export default () => {
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substr(1);

  const { collapsed } = useContext(NavbarContext);

  return (
    <Menu theme='dark' mode='vertical' defaultSelectedKeys={[path]}  style={{backgroundColor:'rgb(14,61,31'}}>
      <Menu.Item key={'dashboard'} icon={<HomeOutlined />}>
        <Link to={'/dashboard'}>Courses</Link>
      </Menu.Item>
      <Menu.Item key={'facegallery'} icon={<PictureOutlined />}>
        <Link to={'/facegallery'}>Face Gallery</Link>
      </Menu.Item>
    </Menu>
  );
};
