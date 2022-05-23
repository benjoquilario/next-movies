import { useState } from 'react';
import Link from 'next/link';
import useAuth from '../../hooks/useAuth';
import PopUp from '../UI/PopUp';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <>
      {isOpen && <PopUp logout={logout} setIsOpen={setIsOpen} />}
      <header className="absolute top-0 left-0 w-full z-20 h-[70px] bg-[#152232] shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)]">
        <div className="flex items-center gap-4 h-[68px] px-[4%] bg-gradient-to-b from-[#000000b3] to-[#00000000]">
          <Link href="/">
            <a className="flex items-center gap-2 text-white z-10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                  fill="#6a55fa"
                ></path>
              </svg>
              <span className="text-[18px] md:text-[27px] font-semibold uppercase">
                NextMovie
              </span>
            </a>
          </Link>
          <nav className="z-10">
            <div
              className={`-z-10 md:z-10 relative md:bg-transparent w-full h-full flex justify-center flex-col md:flex-row items-center gap-4`}
            >
              <ul className="flex gap-2 md:gap-3 text-center py-3 md:p-0 rounded">
                <li className="text-[12px] md:text-[14px] text-[#e5e5e5]">
                  <Link href="/tv">
                    <a>Shows</a>
                  </Link>
                </li>
                <li className="text-[12px] md:text-[14px] text-[#e5e5e5]">
                  <Link href="/movies">
                    <a>Movies</a>
                  </Link>
                </li>
                <li className="text-[12px] md:text-[14px] text-[#e5e5e5]">
                  <Link href="/mylist">
                    <a>My List</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="ml-auto">
            {user ? (
              <button className="" onClick={() => setIsOpen(true)}>
                <svg width="24" height="24">
                  <path
                    fill="#6a55fa"
                    d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 00-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                  ></path>
                </svg>
              </button>
            ) : (
              <Link href="/login">
                <a aria-label="go to login form">
                  <svg width="24" height="24">
                    <path
                      fill="#6a55fa"
                      d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 00-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                    ></path>
                  </svg>
                </a>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
