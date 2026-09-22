import { notoNastaliq, quran } from '@/app/layout';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative mx-auto flex h-[50rem] w-full">
      <Image src={'/img/hero.png'} alt="پس زمینه" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative flex flex-col items-center justify-center px-[3rem]">
        <p className={`${quran.className} text-[2.4rem] text-[#D6A84F]`}>
          السَّلامُ عَلَيْكَ يَا بَقِيَّةَ اللَّه
        </p>
        <h1
          className={`${notoNastaliq.className} flex items-center gap-2 text-[5.2rem] font-bold text-[#E5E7E8]`}>
          <span className="">امام مهدی</span>
          <span className="text-[1.4rem] text-[#D6A84F]">{`(عج)`}</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
