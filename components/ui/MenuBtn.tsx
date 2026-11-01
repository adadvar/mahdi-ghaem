'use client';

import { useEffect, useState } from 'react';
import { BsList } from 'react-icons/bs';
import Navbar from '@/components/layout/NavbarMobile';

const MenuBtn = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <button className="block sm:hidden" onClick={() => setOpen((prev: boolean) => !prev)}>
        <BsList className="h-[3rem] w-[3rem]" />
      </button>
      <Navbar className="" isOpen={isOpen} setOpen={setOpen} />
    </>
  );
};

export default MenuBtn;
