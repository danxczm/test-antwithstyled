'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Layout, Menu, MenuProps, theme } from 'antd';
import Icon from './Icon';

const { Header, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: 1, label: 'Календар', icon: <Icon icon='calendar' /> },
  { key: 2, label: 'Графік', icon: <Icon icon='chart_line' /> },
  { key: 3, label: 'Клієнт', icon: <Icon icon='customers' /> },
  { key: 4, label: 'Послуги', icon: <Icon icon='services' /> },
  { key: 5, label: 'Фінанси', icon: <Icon icon='data' /> },
  { key: 6, label: 'Аналітика', icon: <Icon icon='analytics' /> },
  { key: 7, label: 'Персоналізація', icon: <Icon icon='brush' /> },
  { key: 8, label: 'Лояльність', icon: <Icon icon='gift' /> },
  { key: 9, label: 'Відгуки', icon: <Icon icon='chat' /> },
  {
    type: 'divider',
    style: { width: '208px', marginLeft: 'auto', marginRight: 'auto' },
  },
  { key: 10, label: 'Налаштування', icon: <Icon icon='settings' /> },
  { key: 11, label: 'Допомога', icon: <Icon icon='help' /> },
  {
    type: 'divider',
    style: { margin: 0, border: 10, flexGrow: 1, visibility: 'hidden' },
  },
  { key: 12, label: 'Вийти', icon: <Icon icon='signout' /> },
];

const Sidebar = () => {
  //   const {
  //     token: { colorBgContainer, borderRadiusLG },
  //   } = theme.useToken();

  return (
    <Layout>
      <Sider
        width='240px'
        style={{
          height: '100vh',
          zIndex: 2,
          overflow: 'auto',
          position: 'fixed',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: 'inherit',
          }}
        >
          <div className='demo-logo-vertical' />
          <div style={{ backgroundColor: 'white' }}>
            {/* <Image
              href='/logo.svg'
              alt=''
              style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                marginLeft: '80px',
              }}
            /> */}
          </div>
          <Menu
            items={items}
            style={{
              color: 'white',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              paddingBlockEnd: '1rem',
            }}
          />
        </div>
      </Sider>
      <Layout>
        {/* <Header style={{ padding: 0, background: 'silver' }}>TEXT</Header> */}
      </Layout>
    </Layout>
  );
};

export default Sidebar;
