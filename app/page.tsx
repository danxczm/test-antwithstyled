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
      <Icon icon='done' width={50} color='silver' />
    </main>
  );
}
