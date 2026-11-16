'use client';

import Link from 'next/link';
import SearchBtn from '../ui/SearchBtn';
import { BsX } from 'react-icons/bs';
import Logo from '../ui/Logo';

const Navbar = ({
  className = '',
  isOpen,
  setOpen
}: {
  className?: string;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const navItemClass =
    'border-b-2 py-3 border-b-transparent hover:border-border duration-500 transition-colors';
  const closeMenu = () => setOpen(false);

  return (
    <section
      aria-hidden={!isOpen}
      className={`${className} bg-primary-900/95 text-light fixed inset-0 flex flex-col items-center justify-center gap-3 px-[3rem] py-[2rem] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
      <button
        type="button"
        className="absolute top-11 left-12"
        onClick={closeMenu}
        tabIndex={isOpen ? 0 : -1}
        aria-label="بستن منو">
        <BsX className="h-[3rem] w-[3rem]" />
      </button>
      <Logo />
      <nav aria-hidden={!isOpen}>
        <ul className="flex flex-col items-center justify-between gap-[3.2rem] text-[1.6rem]">
          <li className={navItemClass}>
            <Link href={'#'} onClick={closeMenu} tabIndex={isOpen ? 0 : -1} aria-hidden={!isOpen}>
              خانه
            </Link>
          </li>
          <li className={navItemClass}>
            <Link href={'#'} onClick={closeMenu} tabIndex={isOpen ? 0 : -1} aria-hidden={!isOpen}>
              مطالب
            </Link>
          </li>
          <li className={navItemClass}>
            <Link href={'#'} onClick={closeMenu} tabIndex={isOpen ? 0 : -1} aria-hidden={!isOpen}>
              درباره امام زمان
            </Link>
          </li>
          <li className={navItemClass}>
            <Link href={'#'} onClick={closeMenu} tabIndex={isOpen ? 0 : -1} aria-hidden={!isOpen}>
              درباره این پروژه
            </Link>
          </li>
        </ul>
      </nav>
      <SearchBtn className={navItemClass} onClick={closeMenu} />
    </section>
  );
};

export default Navbar;
