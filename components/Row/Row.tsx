import { useRef, useState } from 'react';
import { IMovie } from '../../lib/types';
import Thumbnail from '../Thumbnail/Thumbnail';

interface IMovieRow {
  title: string;
  movies: IMovie[];
}

const Row = ({ title, movies }: IMovieRow) => {
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
    <div className="mb-4">
      <div className="flex items-center text-white mb-4">
        <h2 className="text-base md:text-[20px] uppercase font-semibold">
          {title}
        </h2>
        <div className="flex-1 mx-[12px] rounded-lg border-[1px] border-solid border-[#9e9e9e]"></div>
        <div className="flex gap-3 items-center">
          <button
            onClick={() => onHandleClick('left')}
            className="p-1 md:p-2 rounded-full text-[#ededed] border-solid border-2 border-white"
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
            className="p-1 md:p-2 rounded-full text-[#ededed] border-solid border-2 border-white"
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
        </div>
      </div>
      <div
        ref={rowRef}
        className="flex items-center gap-2 relative overflow-x-scroll scrollbar-hide ml-6"
      >
        {movies?.length === 0 && <div>Loadding</div>}
        {movies?.map(movie => (
          <Thumbnail movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Row;
