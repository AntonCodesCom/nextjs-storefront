import CommonFooter from '@/Common/components/Footer';
import CommonHeader from '@/Common/components/Header';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Readonly<Props>) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <div style={{ position: 'sticky', top: 0, zIndex: 4 }}>
        <CommonHeader />
      </div>
      <main style={{ flex: 1 }}>{children}</main>
      <div className="mb-10" />
      <CommonFooter />
    </div>
  );
}
