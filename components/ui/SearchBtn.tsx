import { BsSearch } from 'react-icons/bs';

const SearchBtn = ({ className }: { className: string }) => {
  return (
    <button className={`${className} hidden sm:block`}>
      <BsSearch className="h-[2.4rem] w-[2.4rem]" />
    </button>
  );
};

export default SearchBtn;
