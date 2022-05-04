interface IGenres {
  genre: string;
}

const Genres = ({ genre }: IGenres) => {
  return (
    <a className="flex items-center leading-none text-[13px] text-[#ff206e] uppercase py-[8px] mr-[8px] font-bold">
      <svg
        viewBox="0 0 512 512"
        fill="currentColor"
        width="15px"
        className="mr-[4px]"
      >
        <path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path>
      </svg>
      {genre}
    </a>
  );
};

export default Genres;
