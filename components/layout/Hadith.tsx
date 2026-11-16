import Image from 'next/image';
import { BsQuote } from 'react-icons/bs';

const Hadith = () => {
  return (
    <section className="relative mx-auto flex h-[20rem] w-full max-w-[144rem] flex-row-reverse overflow-hidden rounded-[1rem]">
      {/* 1. IMAGE LAYER */}
      <div className="absolute inset-0 px-[3rem]">
        <div className="relative h-full w-full overflow-hidden rounded-[1rem]">
          <Image
            src="/img/msg.jpg"
            alt="حدیث"
            fill
            sizes="(max-width: 640px) 100vw, 100vw"
            className="hidden object-cover sm:block"
            loading="eager"
          />
          <Image
            src="/img/msg2.jpg"
            alt="حدیث"
            fill
            sizes="(max-width: 640px) 100vw, 100vw"
            className="block object-cover sm:hidden"
            loading="eager"
          />
        </div>
      </div>

      {/* 2. GRADIENT OVERLAY LAYER */}
      <div className="absolute inset-0 px-[3rem]">
        <div className="md:from-primary-950 md:via-primary-950/90 h-full w-full rounded-[1rem] md:bg-linear-to-r md:to-transparent" />
      </div>

      {/* 3. TEXT LAYER */}
      <div className="relative z-10 flex h-full flex-col justify-center px-[6rem] md:w-3/5">
        {/* Author Section */}
        <div className="mb-4 flex items-center gap-3">
          <BsQuote className="text-gold h-[2.5rem] w-[2.5rem] shrink-0" />
          <h3 className="text-gold text-[1.8rem] font-bold">امام علی (ع)</h3>
        </div>

        {/* Quote Text */}
        <p className="text-light text-[1.6rem] leading-relaxed">
          {`«بدانید که صبرکنندگان بر اذیت و آزار و تکذیب دشمنان در زمان غیبت قائم، مانند مجاهدانی
          هستند که در رکاب پیامبر (صلی الله علیه وآله) با شمشیر پیکار می‌کنند.»`}
        </p>
      </div>
    </section>
  );
};

export default Hadith;
