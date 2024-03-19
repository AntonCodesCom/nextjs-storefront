import CommonFooter from '@/Common/components/Footer';
import CommonHeader from '@/Common/components/Header';
import CommonTbd from '@/Common/components/Tbd';

export default function RouteCheckout() {
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
      <main style={{ flex: 1 }}>
        <CommonTbd />
      </main>
      <CommonFooter />
    </div>
  );
}
