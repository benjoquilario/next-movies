import { useState, useRef } from 'react';
import { ICredits } from '../../lib/types';
import CreditsCard from './CreditsCard';

interface ICreditsProps {
  credits: ICredits;
}

const Credits = ({ credits }: ICreditsProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const onHandleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden">
      <button
        onClick={() => onHandleClick('left')}
        className="absolute left-0 top-[3px] p-1 md:p-2 rounded-full text-[#ededed] border-solid border-2 border-white z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          className="text-white"
          fill="currentColor"
          stroke="currentColor"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path>
        </svg>
      </button>
      <button
        onClick={() => onHandleClick('right')}
        className="absolute right-0 top-[3px] p-1 md:p-2 rounded-full text-[#ededed] border-solid border-2 border-white z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          className="text-white"
          fill="currentColor"
          stroke="currentColor"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
        </svg>
      </button>
      <div
        ref={rowRef}
        className="flex items-center gap-2 relative overflow-x-scroll scrollbar-hide mx-[44px]"
      >
        {credits.cast?.map(member => (
          <CreditsCard key={member.id} member={member.profile_path} name={member.original_name}/>
        ))}
      </div>
    </div>
  );
};

export default Credits;
