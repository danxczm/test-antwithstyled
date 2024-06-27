'use client';
import { useState } from 'react';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { ConfigProvider, Space } from 'antd';
import { Select } from 'antd';

type ThemeKey = 'light' | 'dark' | 'glass';

export default function Home() {
  const [theme, setTheme] = useState<ThemeKey>('light');

  const themeOptions = [
    {
      value: 'Light',
      label: 'Light',
    },
    {
      value: 'Dark',
      label: 'Dark',
    },
    {
      value: 'Glass',
      label: 'Glass',
    },
  ];

  const themes: { [key in ThemeKey]: object } = {
    light: {},
    dark: {
      colorBgBase: '#5AB2FF',
      colorPrimary: '#5AB2FF',
      colorTextBase: '#FFF9D0',
    },
    glass: {
      colorBgBase: '#CAF4FF',
      colorTextBase: '#3a668d',
    },
  };

  const handleChange = (value: string) => {
    setTheme(value.toLowerCase() as ThemeKey);
  };

  return (
    <main>
      <ConfigProvider theme={{ token: themes[theme] }}>
        <Space direction='vertical' size='large'>
          <Select
            defaultValue='Light'
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={themeOptions}
          />
          <Button icon={<Icon icon='google' />}>Увійти через Google</Button>
          <Button type='primary'>Зареєструватись</Button>
        </Space>
      </ConfigProvider>
    </main>
  );
}
