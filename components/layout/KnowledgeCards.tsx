import { BsChevronRight, BsPersonCircle } from 'react-icons/bs';
import type { IconType } from 'react-icons';
import Link from 'next/link';
import { lighten } from '@/lib/utils';

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
      className="flex h-[25.6rem] w-[25.6rem] shrink-0 flex-col items-center justify-center gap-[1.2rem] rounded-[1rem] border border-[#E5E7E8] bg-white px-[1.2rem] py-[1.6rem] shadow-md transition-colors hover:bg-gray-50">
      <span
        className="flex min-h-[6.4rem] w-[6.4rem] items-center justify-center rounded-full"
        style={{
          background: lighten(item.color, 0.6),
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: lighten(item.color, 0.4)
        }}>
        <Icon className="h-[3.2rem] w-[3.2rem]" style={{ color: item.color }} />
      </span>
      <h3 className="text-[1.8rem] font-bold text-[#062A3A]">{item.title}</h3>
      <p className="text-[1.6rem] text-[#6B7A80]">{item.subTitle}</p>
      <BsChevronRight className="h-[2.4rem] w-[2.4rem]" />
    </Link>
  );
};

const items: Item[] = [
  {
    icon: BsPersonCircle,
    color: '#2BA6A4',
    title: 'ولادت و نسب',
    subTitle: 'از تولد تا آغاز امامت'
  },
  {
    icon: BsPersonCircle,
    color: '#15b91e',
    title: 'ولادت و نسب',
    subTitle: 'از تولد تا آغاز امامت'
  },
  {
    icon: BsPersonCircle,
    color: '#15b91e',
    title: 'ولادت و نسب',
    subTitle: 'از تولد تا آغاز امامت'
  },
  {
    icon: BsPersonCircle,
    color: '#15b91e',
    title: 'ولادت و نسب',
    subTitle: 'از تولد تا آغاز امامت'
  },
  {
    icon: BsPersonCircle,
    color: '#15b91e',
    title: 'ولادت و نسب',
    subTitle: 'از تولد تا آغاز امامت'
  }
];

const KnowledgeCards = () => {
  return (
    <section className="flex w-full min-w-0 flex-col items-center px-[3rem]">
      <h2 className="text-[3rem] font-bold text-[#172B36]">امام را بشناسیم</h2>
      <p className="text-[1.6rem] text-[#6B7A80]">
        برای شناخت بهتر، با بخش های مهم زندگی و دوران امام ایشان آشنا شوید.
      </p>
      <div className="my-[3.2rem] flex w-full gap-[2.4rem] overflow-x-auto">
        {items.map((item: Item, idx: number) => (
          <Card key={idx} item={item} />
        ))}
      </div>
    </section>
  );
};

export default KnowledgeCards;
