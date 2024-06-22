'use client';
import Button from '@/components/Button';

import { FcGoogle } from 'react-icons/fc';

export default function Home() {
  return (
    <main>
      <Button type='primary'>Зареєструватись</Button>
      <Button icon={<FcGoogle size={22} />}>Увійти через Google</Button>
    </main>
  );
}
