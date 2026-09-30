import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import { vazirmatn } from './fonts';

export const metadata: Metadata = {
  title: 'مهدی قائم',
  description: 'دوازدهمین امام شیعیان - حضرت مهدی، فرزند امام حسن عسکری (ع)'
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.className} antialiased`}>
      <body className="bg-[#F8F7F3]">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
