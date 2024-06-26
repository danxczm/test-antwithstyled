'use client';
import Button from '@/components/Button';
import Icon from '@/components/Icon';

import { FcGoogle } from 'react-icons/fc';

export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button type='primary'>Зареєструватись</Button>
      <Button icon={<Icon icon='google' />}>Увійти через Google</Button>
      <Icon icon='done' width={50} color='tomato' />
      <Icon icon='search' width={50} color='green' />
      <Icon icon='google' width={50} color='tomato' />
      <Icon icon='signout' width={50} color='tomato' />
      <Icon icon='data' width={50} color='tomato' />
      <Icon icon='chart_line' width={50} color='tomato' />
      <Icon icon='image' width={50} color='tomato' />
    </main>
  );
}
