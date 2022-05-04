import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [innerWidth, setInnerWidth] = useState(
    typeof window !== 'undefined' && window.innerWidth
  );
  const breakpoints = 768;

  useEffect(() => {
    window.addEventListener('resize', () => setInnerWidth(window.innerWidth));

    return () =>
      window.removeEventListener('resize', () =>
        setInnerWidth(window.innerWidth)
      );
  });

  console.log(innerWidth);

  return (
    <header className="absolute top-0 left-0 w-full z-20 h-[70px] bg-[#152232] shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)]">
      <div className="flex items-center gap-4 h-[68px] px-[4%] bg-gradient-to-b from-[#000000b3] to-[#00000000]">
        <Link href="/">
          <a className="flex items-center gap-2 text-white z-10">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                fill="#6a55fa"
              ></path>
            </svg>
            <span className="text-[22px] md:text-[32px] font-semibold">
              NextMovie
            </span>
          </a>
        </Link>
        <nav>
          <div
            className={`-z-10 md:z-10 relative md:bg-transparent w-full h-full flex justify-center flex-col md:flex-row items-center gap-4`}
          >
            <ul className="flex gap-2 md:gap-3 text-center py-3 md:p-0 rounded">
              <li className="text-[12px] md:text-[14px] text-[#e5e5e5]">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="text-[12px] md:text-[14px] text-[#e5e5e5]">
                <Link href="/">
                  <a>TV Shows</a>
                </Link>
              </li>
              <li className="text-[12px] md:text-[14px] text-[#e5e5e5]">
                <Link href="/">
                  <a>Movie</a>
                </Link>
              </li>
              <li className="text-[12px] md:text-[14px] text-[#e5e5e5]">
                <Link href="/">
                  <a>My List</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
