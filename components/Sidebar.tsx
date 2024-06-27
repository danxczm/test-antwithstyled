'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Layout, Menu, theme } from 'antd';
import Icon from './Icon';

const { Header, Sider } = Layout;

const items = [
  { label: 'Календар', icon: <Icon icon='calendar' /> },
  { label: 'Графік', icon: <Icon icon='chart_line' /> },
  { label: 'Клієнт', icon: <Icon icon='customers' /> },
  { label: 'Послуги', icon: <Icon icon='services' /> },
  { label: 'Фінанси', icon: <Icon icon='data' /> },
  { label: 'Аналітика', icon: <Icon icon='analytics' /> },
  { label: 'Персоналізація', icon: <Icon icon='brush' /> },
  { label: 'Лояльність', icon: <Icon icon='gift' /> },
  { label: 'Відгуки', icon: <Icon icon='chat' /> },
  { label: 'Налаштування', icon: <Icon icon='settings' /> },
  { label: 'Допомога', icon: <Icon icon='help' /> },
  { label: 'Вийти', icon: <Icon icon='signout' /> },
].map(({ label, icon }, index) => ({
  key: String(index + 1),
  label,
  icon,
}));

const Sidebar = () => {
  //   const {
  //     token: { colorBgContainer, borderRadiusLG },
  //   } = theme.useToken();

  return (
    <Layout>
      <Sider>
        <div className='demo-logo-vertical' />
        <Menu
          theme='light'
          mode='inline'
          defaultSelectedKeys={['3']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: 'silver' }}>TEXT</Header>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
