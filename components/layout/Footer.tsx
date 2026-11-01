import Link from 'next/link';
import Logo from '../ui/Logo';

const Footer = () => {
  const navItemClass =
    'inline-block border-b-1 rounded-sm w-fit font-light border-b-transparent hover:border-[#E5E7E8] duration-500 transition-colors';
  const year = new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric'
  }).format(new Date());

  return (
    <section className="space-y-10 bg-[#031C29] py-[2.4rem] text-[1.6rem] text-[#E5E7E8]">
      <div className="xs:grid-cols-2 mx-auto grid max-w-[144rem] grid-cols-1 gap-[4.8rem] px-[3rem] lg:grid-cols-5">
        <div className="xs:col-span-2 space-y-4">
          <Logo />
          <p className="">{`این سایت با هدف آشنایی بیشتر با امام زمان (عج) و جمع‌آوری مطالب مفید و کوتاه، توسط یک دوست‌دار اهل بیت (ع) ایجاد شده است.`}</p>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-[#0E8F91]">دسترسی سریع</h3>
          <ul className="flex flex-col justify-between">
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
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-[#0E8F91]">لینک‌های مفید</h3>
          <ul className="flex flex-col justify-between">
            <li className={navItemClass}>
              <Link href={'#'}>مؤسسه‌های معتبر</Link>
            </li>
            <li className={navItemClass}>
              <Link href={'#'}>کتاب‌ها</Link>
            </li>
            <li className={navItemClass}>
              <Link href={'#'}>سوالات متداول</Link>
            </li>
          </ul>
        </div>
        <div className="xs:col-span-2 lg:col-span-1">
          <h3 className="">اللهم عجل لولیک الفرج</h3>
        </div>
      </div>
      <div className="h-[1px] w-full max-w-[144rem] bg-gradient-to-r from-transparent via-[#0E8F91] to-transparent" />
      <div className="max-w-[144rem] px-[3rem]">
        <p className=""> &copy;{` ${year} - مهدی قائم، همه حقوق محفوظ است.`}</p>
      </div>
    </section>
  );
};

export default Footer;
