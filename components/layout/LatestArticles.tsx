import Link from 'next/link';
import { BsArrowLeft, BsClockHistory } from 'react-icons/bs';
import art1 from '@/public/img/art1.png';
import art2 from '@/public/img/art2.png';
import art3 from '@/public/img/art3.png';
import Image, { StaticImageData } from 'next/image';
import { en2fa } from '@/lib/utils';

interface Item {
  img: StaticImageData;
  tag: string;
  tagColor: string;
  title: string;
  subTitle: string;
  date: string;
  studyMin: string;
}

const Card = ({ item }: { item: Item }) => {
  return (
    <Link
      href={`#`}
      className="group h-[30rem] min-w-[30rem] flex-1 rounded-[1rem] border border-[#E5E7E8] bg-white shadow-md transition-all hover:bg-gray-50">
      <div className="w-full overflow-hidden rounded-t-[1rem]">
        <Image
          src={item.img}
          className="h-[15rem] w-full object-cover transition-all duration-500 group-hover:scale-105"
          alt={item.title}
        />
      </div>
      <div className="flex flex-col justify-between gap-[1.2rem] px-[1.2rem]">
        <h3 className="text-start text-[1.6rem] font-bold text-[#062A3A]">{item.title}</h3>
        <p className="text-[1.2rem] text-[#6B7A80]">{item.subTitle}</p>
        <div className="flex w-full items-center justify-between self-end px-[1.2rem]">
          <span className="text-[1.2rem] text-[#6B7A80]">{en2fa(item.date)}</span>
          <span className="flex items-center text-[1.2rem] text-[#6B7A80]">
            <BsClockHistory className="me-2" />
            <span>{`${en2fa(item.studyMin)} دقیقه مطالعه`}</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

const items: Item[] = [
  {
    img: art1,
    tag: 'ولادت',
    tagColor: '#007451',
    title: 'امام زمان چندمین امام است؟',
    subTitle: 'حضرت مهدی (عج) در اعتقاد شیعه دوازدهمین امام است.',
    date: '30 آبان 1403',
    studyMin: '5'
  },
  {
    img: art2,
    tag: 'غیبت',
    tagColor: '#002974',
    title: 'غیبت صغری چه بود؟',
    subTitle:
      'غیبت صغری، دوره ای بود که امام مهدی (عچ) از طریق نواب خاص با شیعیان در ارتباط بودند.',
    date: '30 آبان 1403',
    studyMin: '5'
  },
  {
    img: art3,
    tag: 'احادیث',
    tagColor: '#460074',
    title: 'چرا امام زمان غیبت کردند؟',
    subTitle:
      'در این مطلب به دلایل غیبت امام مهدی (عج) از دیدگاه منابع دینی و روایات معتبر میپردازیم.',
    date: '30 آبان 1403',
    studyMin: '5'
  }
];

const LatestArticles = () => {
  return (
    <section className="mx-auto max-w-[144rem] bg-white py-[2.4rem] shadow">
      <div className="mx-auto flex max-w-[144rem] flex-col items-center justify-center px-[3rem] sm:flex-row sm:justify-between">
        <div>
          <h2 className="text-center text-[3rem] font-bold text-[#172B36] sm:text-start">
            آخرین مطالب
          </h2>
          <p className="text-[1.6rem] text-[#6B7A80]">
            مطالب کوتاه و مفید برای آشنایی بیشتر با امام زمان (عج)
          </p>
        </div>
        <Link
          href={'#'}
          className="group flex items-center text-[1.4rem] text-blue-800 hover:underline">
          <span className="me-2">مشاهده همه</span>
          <BsArrowLeft className="transition-transform group-hover:-translate-x-1" />
        </Link>
      </div>
      <div className="my-[3.2rem] flex w-full gap-[2.4rem] overflow-x-auto overflow-y-hidden px-[3rem]">
        {items.map((item: Item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
