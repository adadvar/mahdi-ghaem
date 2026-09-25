import { notoNastaliq, quran } from '@/app/layout';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative mx-auto flex h-[50rem] w-full">
      <Image src={'/img/hero.png'} alt="پس زمینه" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative flex flex-col items-center justify-center px-[3rem]">
        <span className={`${quran.className} text-[2.4rem] text-[#D6A84F]`}>
          السَّلامُ عَلَيْكَ يَا بَقِيَّةَ اللَّه
        </span>
        <h1
          className={`${notoNastaliq.className} flex items-center gap-2 text-[5.2rem] font-bold text-[#E5E7E8]`}>
          <span className="">امام مهدی</span>
          <span className="text-[1.4rem] text-[#D6A84F]">{`(عج)`}</span>
        </h1>
        <span className="mt-10 text-[1.6rem] text-[#E5E7E8]">
          حضرت مهدی، فرزند امام حسن عسکری (ع)
        </span>
        <span className="self-start text-[1.4rem] text-[#E5E7E8]">دوازدهمین امام شیعیان</span>
      </div>
    </section>
  );
};

export default Hero;
