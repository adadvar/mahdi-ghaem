import Image from 'next/image';

const Hadith = () => {
  return (
    <div className="relative mx-auto flex h-[45rem] w-full max-w-[144rem] overflow-hidden rounded-[1rem] bg-[#062A3A]">
      <Image src="/img/msg.png" alt="حدیث" fill className="object-cover" />
      <div className="relative z-10 flex h-full w-full flex-col justify-center px-[2rem] py-[2rem]">
        {/* Text side — same background, no border */}
        <h3 className="mb-2 text-[1.4rem] font-bold text-[#D6A84F]">امام علی (ع)</h3>
        <p className="text-[1.6rem] leading-relaxed text-[#E5E7E8]">
          بدانید که صبرکنندگان بر اذیت و آزار و تکذیب دشمنان در زمان غیبت قائم، مانند مجاهدانی هستند
          که در رکاب پیامبر (صلی الله علیه وآله) با شمشیر پیکار می‌کنند.
        </p>
      </div>
    </div>
  );
};

export default Hadith;
