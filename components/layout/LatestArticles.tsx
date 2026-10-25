import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';
import art1 from '@/public/img/art1.png';
import art2 from '@/public/img/art2.png';
import art3 from '@/public/img/art3.png';
import Image from 'next/image';
import { en2fa } from '@/lib/utils';

interface Item {
  img: HTMLImageElement;
  tag: string;
  tagColor: string;
  title: string;
  subTitle: string;
  date: string;
  studyMin: string;
}

const Card = ({ item }: { item: Item }) => {
  const Icon = item.img;
  return (
    <Link
      href={`#`}
      className="flex h-[40rem] flex-1 shrink-0 flex-col items-center justify-between gap-[1.2rem] overflow-hidden rounded-[1rem] border border-[#E5E7E8] bg-white pb-[1.6rem] shadow-md transition-all duration-500 hover:translate-y-2 hover:bg-gray-50">
      <Image src={item.img} height={500} className="object-cover" alt={item.title} />
      <h3 className="px-[1.2rem] text-[1.8rem] font-bold text-[#062A3A]">{item.title}</h3>
      <p className="text-[1.6rem] text-[#6B7A80]">{item.subTitle}</p>
      <div className="flex w-full items-center justify-between px-[1.2rem]">
        <span className="text-[1.2rem] text-[#6B7A80]">{en2fa(item.date)}</span>
        <span className="text-[1.2rem] text-[#6B7A80]">{`${en2fa(item.studyMin)} دقیقه مطالعه`}</span>
      </div>
    </Link>
  );
};

const items: Item[] = [
  {
    img: art1,
    tag: 'امامت',
    tagColor: '#007451',
    title: 'ولادت و نسب',
    subTitle: 'از تولد تا آغاز امامت',
    date: '30 آبان 1403',
    studyMin: '5'
  },
  {
    img: art1,
    tag: 'امامت',
    tagColor: '#007451',
    title: 'ولادت و نسب',
    subTitle: 'از تولد تا آغاز امامت',
    date: '30 آبان 1403',
    studyMin: '5'
  },
  {
    img: art1,
    tag: 'امامت',
    tagColor: '#007451',
    title: 'ولادت و نسب',
    subTitle: 'از تولد تا آغاز امامت',
    date: '30 آبان 1403',
    studyMin: '5'
  }
];

const LatestArticles = () => {
  return (
    <section className="mx-auto max-w-[144rem] bg-white py-[2.4rem] shadow">
      <div className="mx-auto flex max-w-[144rem] items-center justify-between px-[3rem]">
        <div className="">
          <h2 className="text-[3rem] font-bold text-[#172B36]">آخرین مطالب</h2>
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
      <div className="my-[3.2rem] flex w-full gap-[2.4rem] overflow-x-auto px-[3rem]">
        {items.map((item: Item, idx: number) => (
          <Card key={idx} item={item} />
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
