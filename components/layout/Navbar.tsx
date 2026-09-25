import { notoNastaliq } from '@/app/layout';
import Image from 'next/image';
import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
const Navbar = ({ className }: { className: string }) => {
  const navItemClass =
    'border-b-2 py-3 border-b-transparent hover:border-[#E5E7E8] duration-500 transition-colors';
  return (
    <header
      className={`${className} flex items-center justify-between px-[3rem] py-[2rem] text-[#E5E7E8]`}>
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
      <nav className="">
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
      <button className={`${navItemClass} cursor-pointer`}>
        <BsSearch className="h-[2.4rem] w-[2.4rem]" />
      </button>
    </header>
  );
};

export default Navbar;
