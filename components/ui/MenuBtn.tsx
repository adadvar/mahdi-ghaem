'use client';

import { useState } from 'react';
import { BsList } from 'react-icons/bs';
import Navbar from '@/components/layout/NavbarMobile';

const MenuBtn = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="block sm:hidden" onClick={() => setOpen((prev: boolean) => !prev)}>
        <BsList className="h-[3rem] w-[3rem]" />
      </button>
      {open && <Navbar className="" setOpen={setOpen} />}
    </>
  );
};

export default MenuBtn;
