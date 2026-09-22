import { notoNastaliq } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
const Navbar = ({ className }: { className: string }) => {
  const navItemClass =
    "border-b-2 py-3 border-b-transparent hover:border-[#E5E7E8] transition-colors";
  return (
    <header
      className={`${className} px-[3rem] py-[2rem] flex items-center justify-between text-[#E5E7E8]`}
    >
      <Link href={"/"} className="flex gap-2 items-center">
        <Image
          src={"/apple-touch-icon.png"}
          alt="لوگو امام مهدی"
          width={50}
          height={50}
          priority
          quality={50}
        />
        <span className={`text-[2.4rem] ${notoNastaliq.className}`}>
          مهدی موعود
        </span>
      </Link>
      <nav className="">
        <ul className="flex items-center text-[1.6rem] justify-between gap-[3.2rem]">
          <li className={navItemClass}>
            <Link href={"#"}>خانه</Link>
          </li>
          <li className={navItemClass}>
            <Link href={"#"}>مطالب</Link>
          </li>
          <li className={navItemClass}>
            <Link href={"#"}>درباره امام زمان</Link>
          </li>
          <li className={navItemClass}>
            <Link href={"#"}>درباره این پروژه</Link>
          </li>
        </ul>
      </nav>
      <button className="">
        <BsSearch className="w-[2.4rem] h-[2.4rem]" />
      </button>
    </header>
  );
};

export default Navbar;
