import { notoNastaliq, quran } from '@/app/fonts';
import Image from 'next/image';
import { BsArrowLeft } from 'react-icons/bs';

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
        <button className="group mt-5 flex items-center justify-center rounded-full bg-[#0E8F91] px-[2rem] py-[1rem] text-[1.4rem] text-[#E5E7E8] transition-colors hover:bg-[#2BA6A4]">
          <span className="me-2">مطالعه را شروع کنید</span>
          <BsArrowLeft className="transition-transform group-hover:-translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
