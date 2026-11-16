import {
  BsChevronRight,
  BsPerson,
  BsHourglassSplit,
  BsSunrise,
  BsBook,
  BsQuestionLg
} from 'react-icons/bs';
import type { IconType } from 'react-icons';
import Link from 'next/link';
import { faintBg } from '@/lib/utils';

interface Item {
  icon: IconType;
  title: string;
  color: string;
  subTitle: string;
}

const Card = ({ item }: { item: Item }) => {
  const Icon = item.icon;

  return (
    <Link
      href={`#`}
      className="border-border flex h-[25.6rem] w-[25.6rem] shrink-0 flex-col items-center justify-center gap-[1.2rem] rounded-[1rem] border bg-white px-[1.2rem] py-[1.6rem] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <span
        className="flex min-h-[6.4rem] w-[6.4rem] items-center justify-center rounded-full"
        style={{
          background: faintBg(item.color),
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: faintBg(item.color, { lightness: 0.8, saturation: 0.4 })
        }}>
        <Icon className="h-[3.2rem] w-[3.2rem]" style={{ color: item.color }} />
      </span>
      <h3 className="text-primary-900 text-[1.8rem] font-bold">{item.title}</h3>
      <p className="text-muted text-[1.6rem]">{item.subTitle}</p>
      <BsChevronRight className="h-[2.4rem] w-[2.4rem]" />
    </Link>
  );
};

const items: Item[] = [
  {
    icon: BsPerson,
    color: '#007451',
    title: 'ولادت و نسب',
    subTitle: 'از تولد تا آغاز امامت'
  },
  {
    icon: BsHourglassSplit,
    color: '#5900ac',
    title: 'غیبت',
    subTitle: 'غیبت صغری و کبری'
  },
  {
    icon: BsSunrise,
    color: '#e0ac00',
    title: 'ظهور',
    subTitle: 'نشانه و یاران'
  },
  {
    icon: BsBook,
    color: '#001dc2',
    title: 'احادیث',
    subTitle: 'سخنان گهربار'
  },
  {
    icon: BsQuestionLg,
    color: '#b91515',
    title: 'پرسش‌های کوتاه',
    subTitle: 'پاسخ به سوالات پرتکرار'
  }
];

const Categories = () => {
  return (
    <section className="mx-auto max-w-[144rem] px-[3rem] text-center">
      <h2 className="text-primary-800 text-[3rem] font-bold">امام را بشناسیم</h2>
      <p className="text-muted text-[1.6rem]">
        برای شناخت بهتر، با بخش های مهم زندگی و دوران امام ایشان آشنا شوید.
      </p>
      <div className="scrollbar-hover my-[3.2rem] flex gap-[2.4rem] overflow-x-auto px-2 pt-2 pb-6">
        {items.map((item: Item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
