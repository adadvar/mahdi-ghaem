import Image from 'next/image';
import { BsQuote } from 'react-icons/bs';

const Hadith = () => {
  return (
    <section className="relative mx-auto flex h-[20rem] w-full max-w-[144rem] flex-row-reverse overflow-hidden rounded-[1rem]">
      <Image src="/img/msg.jpg" alt="حدیث" fill className="object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-[#031C29] via-[#031C29]/90 to-transparent" />
      {/* Text side — same background, no border */}
      <div className="flex h-full w-1/2 items-center gap-3 px-[2rem] py-[2rem]">
        <BsQuote className="relative mt-4 h-[3rem] w-[3rem] shrink-0 self-start text-[#D6A84F]" />
        <div className="relative flex flex-col justify-center">
          <h3 className="mb-2 text-[1.8rem] text-[#D6A84F]">امام علی (ع)</h3>
          <p className="text-[1.6rem] text-[#E5E7E8]">
            {`«بدانید که صبرکنندگان بر اذیت و آزار و تکذیب دشمنان در زمان غیبت قائم، مانند مجاهدانی
            هستند که در رکاب پیامبر (صلی الله علیه وآله) با شمشیر پیکار می‌کنند.»`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hadith;
