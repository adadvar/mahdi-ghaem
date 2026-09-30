import { notoNastaliq } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import SearchBtn from '../ui/SearchBtn';
import MenuBtn from '../ui/MenuBtn';
const Navbar = () => {
  const navItemClass =
    'border-b-2 py-3 border-b-transparent hover:border-[#E5E7E8] duration-500 transition-colors';
  return (
    <header
      className={`absolute inset-x-0 top-0 z-10 flex items-center justify-between px-[3rem] py-[2rem] text-[#E5E7E8]`}>
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
      <nav className="hidden sm:block">
        <ul className="flex items-center justify-between gap-[3.2rem] text-[1.6rem]">
          <li className={navItemClass}>
            <Link href={'#'}>خانه</Link>
          </li>
          <li className={navItemClass}>
            <Link href={'#'}>مطالب</Link>
          </li>
          <li className={navItemClass}>
            <Link href={'#'}>درباره امام زمان</Link>
          </li>
          <li className={navItemClass}>
            <Link href={'#'}>درباره این پروژه</Link>
          </li>
        </ul>
      </nav>
      <SearchBtn className={navItemClass} />
      <MenuBtn />
    </header>
  );
};

export default Navbar;
