import Image from 'next/image';
import Link from 'next/link';
import { notoNastaliq } from '@/app/fonts';

const Logo = () => {
  return (
    <Link href={'/'} className="flex items-center gap-2">
      <Image
        src={'/apple-touch-icon.png'}
        alt="لوگو امام مهدی"
        width={50}
        height={50}
        priority
        quality={50}
      />
      <span className={`mb-6 text-[2.4rem] ${notoNastaliq.className}`}>مهدی قائم</span>
    </Link>
  );
};

export default Logo;
