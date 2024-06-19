import * as React from 'react';

import { Toast } from '@/components/common/Toast';
import { Header } from '@/components/layout/Header';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='LayoutWrapper'>
        <Header />
        <main>{children}</main>
      </div>
      <Toast />
    </>
  );
};
