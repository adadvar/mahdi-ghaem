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
    'border-b-2 py-3 border-b-transparent hover:border-[#E5E7E8] duration-500 transition-colors';
  return (
    <section
      className={`${className} fixed inset-0 flex flex-col items-center justify-center gap-3 bg-[#062A3A]/95 px-[3rem] py-[2rem] text-[#E5E7E8] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
      <button className="absolute top-15 left-12" onClick={() => setOpen(false)}>
        <BsX className="h-[3rem] w-[3rem]" />
      </button>
      <Logo />
      <nav className="">
        <ul className="flex flex-col items-center justify-between gap-[3.2rem] text-[1.6rem]">
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
    </section>
  );
};

export default Navbar;
