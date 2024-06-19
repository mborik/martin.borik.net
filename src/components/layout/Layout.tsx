import * as React from 'react';

import Toast from '@/components/common/Toast';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='LayoutWrapper'>
        <main>{children}</main>
      </div>
      <Toast />
    </>
  );
};
