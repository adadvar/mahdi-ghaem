import { BsPersonCircle } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface Item {
  icon: IconType;
  title: string;
  color: string;
  subTitle: string;
}

const Card = ({ item }: { item: Item }) => {
  const Icon = item.icon;
  return (
    <div className="flex h-[20rem] w-[20rem] flex-col items-center bg-white px-[1.2rem] py-[1.6rem] shadow-2xl">
      <span
        className="h-[5rem] w-[5rem] rounded-full"
        style={{ background: item.color, border: 'black' }}>
        <Icon className="h-[2.4rem] w-[2.4rem] text-white" />
      </span>
    </div>
  );
};

const items: Item[] = [
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
  },
  {
    icon: BsPersonCircle,
    color: '#15b91e',
    title: 'ولادت و نسب',
    subTitle: 'از تولد تا آغاز امامت'
  }
] as const;

const KnowledgeCards = () => {
  return (
    <section className="flex flex-col items-center px-[3rem]">
      <h2 className="text-[3rem] font-bold text-[#172B36]">امام را بشناسیم</h2>
      <p className="text-[1.6rem] text-[#6B7A80]">
        برای شناخت بهتر، با بخش های مهم زندگی و دوران امام ایشان آشنا شوید.
      </p>
      <div className="flex items-center justify-between overflow-x-auto">
        {items.map((item: Item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};

export default KnowledgeCards;
