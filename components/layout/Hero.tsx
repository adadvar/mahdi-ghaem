import { notoNastaliq, quran } from '@/app/fonts';
import Image from 'next/image';
import { BsArrowLeft } from 'react-icons/bs';

const Hero = () => {
  return (
    <section className="relative mx-auto flex h-[50rem] w-full">
      <Image
        src={'/img/hero.png'}
        alt="پس زمینه"
        quality={75}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative flex w-full flex-col items-center justify-center px-[3rem] sm:max-w-[40rem]">
        <span className={`${quran.className} text-gold text-[2.4rem]`}>
          السَّلامُ عَلَيْكَ يَا بَقِيَّةَ اللَّه
        </span>
        <h1
          className={`${notoNastaliq.className} text-light flex items-center gap-2 text-[5.2rem] font-bold`}>
          <span className="">امام مهدی</span>
          <span className="text-gold text-[1.4rem]">{`(عج)`}</span>
        </h1>
        <span className="text-light mt-10 text-[1.6rem]">حضرت مهدی، فرزند امام حسن عسکری (ع)</span>
        <span className="text-light text-[1.4rem]">دوازدهمین امام شیعیان</span>
        <button className="group bg-accent text-light hover:bg-accent-hover mt-5 flex items-center justify-center rounded-full px-[2rem] py-[1rem] text-[1.4rem] transition-colors">
          <span className="me-2">مطالعه را شروع کنید</span>
          <BsArrowLeft className="transition-transform group-hover:-translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
