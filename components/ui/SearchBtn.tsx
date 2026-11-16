import { BsSearch } from 'react-icons/bs';

const SearchBtn = ({ className, onClick }: { className: string; onClick?: () => void }) => {
  return (
    <button type="button" className={`${className} hidden sm:block`} onClick={onClick}>
      <BsSearch className="h-[2.4rem] w-[2.4rem]" />
    </button>
  );
};

export default SearchBtn;
