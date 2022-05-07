import Image from 'next/image';
import Link from 'next/link';
import { BASE_URL } from '../../config';
import { IMovie } from '../../lib/types';

interface IThumbnailPros {
  movie: IMovie;
}

const Thumbnail = ({ movie }: IThumbnailPros) =>  (
    <>
      <div
        key={movie.id}
        className="relative w-[112px] min-w-[112px] md:w-[150px] md:min-w-[150px] overflow-visible flex flex-wrap rounded-[6px] content-start mx-auto"
      >
        <div className="relative overflow-hidden w-full rounded-[6px] h-[160px] md:h-[225px] ">
          <div className="relative w-full h-full hover:opacity-80 transition-opacity">
            <Link href={`/${movie?.media_type || 'movie'}/${movie.id}`} >
              <a
                className="relative inline-block w-full h-full"
              >
                <figure className="relative w-full h-full overflow-hidden before:absolute before:w-full before:bg-[#152232] before:top-0 before:left-0 before:h-full before:w-full">
                  <Image
                    layout="fill"
                    src={`${BASE_URL}${movie?.poster_path}`}
                    objectFit="cover"
                    alt={movie?.title}
                  />
                </figure>
              </a>
            </Link>
          </div>
        </div>
        <div className="w-full h-full flex items-start whitespace-normal flex-wrap">
          <h2 className="absolute bottom-[0px] left-0 w-full h-auto p-1 text-center text-white bg-top bg-repeat-x bg-[url('/images/mask.png')]">
            <a className="webkit-box" href={`${movie?.media_type}/${movie.id}`}>
              {movie?.title || movie?.original_title || movie?.name}
            </a>
          </h2>
        </div>
      </div>
    </>
  );


export default Thumbnail;
