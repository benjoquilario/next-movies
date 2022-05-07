import Link from 'next/link';
import React, { useState } from 'react';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const onHandleSubmit = (event: React.FormEvent) => {
    event.preventDefault();


  }

  return (
    <div className="w-full max-w-[407px] flex justify-center h-[52px] items-center mb-4">
      <form className="w-full" onSubmit={onHandleSubmit}>
        <div className="relative w-full block">
          <input
            className="w-full text-white py-[12px] pl-[44px] pr-[15px] text-[12px] bg-[#152232] shadow-3xl"
            type="text"
            placeholder="Search for movies or TV shows"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
         
            <Link href={{pathname: '/search', query: {term: searchTerm}}}>
              <a>
                <button
                  type="submit"
                  className="absolute top-[50%] translate-y-[-50%] left-4 h-[13px] w-[13px]"
                  >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#f5f5f5"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    ></path>
                  </svg>
                </button>
              </a>
            </Link>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
