import Image from 'next/image';
import { BASE_URL } from '../../config';
import { ICredits, IMovieInfo } from '../../lib/types';
import Buttons from '../Buttons/Buttons';
import Credits from '../Credits/Credits';
import Genres from '../Genres/Genres';

interface IInfoBoxProps {
  credits: ICredits;
  movieInfo: IMovieInfo;
}

const InfoBox = ({ credits, movieInfo }: IInfoBoxProps) => {
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center gap-[22px] md:grid-cols-[320px_1fr] md:gap-[18px]">
        <div className="min-w-[318px] w-[318px] h-auto">
          <div className="min-w-[318px] w-[318px] h-[440px] block mt-[-118px] md:mt-0 rounded-t-lg rounded-b-lg overflow-hidden">
            <div className="w-full min-w-full h-full block ">
              <Image
                objectFit="cover"
                src={`${BASE_URL}${movieInfo?.poster_path || movieInfo?.backdrop_path}`}
                width={318}
                height={440}
                alt="halo"
              />
            </div>
          </div>
        </div>
        <div className="grid auto-rows-min text-white w-full">
          <div className="mb-7">
            <h1 className="text-[27px] font-bold uppercase">{movieInfo?.original_title || movieInfo?.title || movieInfo?.original_name}</h1>
            <h2 className="font-semibold uppercase opacity-80">
              {movieInfo?.tagline || ''}
            </h2>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="text-center text-[#fbff12]">
              <h3 className="rating">RATING</h3>
              <span className="text-[23px]">{movieInfo?.vote_average || ''}</span>
            </div>
            <div className="bg-bold uppercase text-[#fbff12]">
              {`${movieInfo?.spoken_languages[0].english_name} / ${movieInfo?.release_date || movieInfo?.last_air_date}`}
            </div>
          </div>
          <div className="mb-5">
            <h3 className="rating">THE GENRES</h3>
            <div className="flex items-center">
              {movieInfo?.genres.map(genre => <Genres key={genre.id} genre={genre.name} />)}
            </div>
          </div>
          <div className="mb-5">
            <h3 className="uppercase">The Synopsis</h3>
            <p className="text-justify text-[13px] leading-relaxed opacity-70">
              {movieInfo?.overview}
            </p>
          </div>
          <Credits credits={credits} />
          <Buttons homepage={movieInfo?.homepage} imdbId={movieInfo.imdb_id} />
        </div>
      </div>
    </>
  );
};

export default InfoBox;
