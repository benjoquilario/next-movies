import Link from 'next/link';
import React from 'react'
import { IMovie } from '../../lib/types';
import Thumbnail from '../Thumbnail/Thumbnail';

interface ISearchProps {
  searchResults: IMovie[];
  searchTerm: string;
}

const SearchResults = ({searchResults, searchTerm}: ISearchProps) => {
  return (
    <div className="mt-5 px-4">
        <div>
            <div className="mb-5 flex justify-between items-center">
                <h2 className="text-white text-[23px]">Search : {searchTerm}</h2>
                <button
                  className='inline-flex items-center justify-center px-[16px] py-[3px] md:min-w-[66px] md:min-w-[86px] min-h-[29px] bg-[#ff206e] rounded'
                  aria-label="back to homepage"
                >
                <Link href="/">
                    <span className='flex gap-2 text-white text-sm'>
                        <svg viewBox="0 0 448 512" fill="currentColor" width="0.8em"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
                    Back
                    </span>
                </Link>
            </button>
            </div>
        </div>
        {searchResults?.length === 0 && 
                <div className="text-white text-center mt-12">
                    <h3 className="text-[43px] font-bold">Sorry!</h3>
                    <h4 className="opacity-70 text-[22px]">There are no {searchTerm} results...</h4>
                </div>
        }
        <div className="relative grid grid-cols-[repeat(auto-fill,150px)] gap-3 justify-center items-center">
            
            {searchResults?.map(movie => 
                <Thumbnail key={movie.id} movie={movie} />
            )}
        </div>
    </div>
  )
}

export default SearchResults