import Head from 'next/head';
import { useRecoilState } from 'recoil';
import { BASE_URL } from '../../config';
import { IMovieInfo, ICredits, IMovies } from '../../lib/types';
import Banner from '../../components/Banner/Banner';
import InfoBox from '../../components/InfoBox/InfoBox';
import Recommendation from '../../components/Recommendation/Recommendation';
import api from '../../api';
import { modalState } from '../../atoms/modalAtoms';
import Modal from '../../components/Modal';

interface ILoadedTVShow {
  loadedMovieShows: IMovieInfo;
  loadedCredits: ICredits;
  loadedRecommendation: IMovies;
}

const MovieView = ({
  loadedMovieShows,
  loadedCredits,
  loadedRecommendation,
}: ILoadedTVShow) => {
  const showModal = useRecoilState(modalState);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0B1622]">
      <Head>
        <title>
          {loadedMovieShows?.original_title ||
            loadedMovieShows?.title ||
            loadedMovieShows?.original_name}
        </title>
      </Head>
      <main>
        <Banner
          selectedBanner={`${BASE_URL}/${loadedMovieShows.backdrop_path}`}
        />
        <div className="relative bg-[#151f2e] w-full min-h-[800px] max-w-[1170px] mx-auto mt-[-75px] p-4 rounded-t-lg">
          <InfoBox credits={loadedCredits} movieInfo={loadedMovieShows} />
          <Recommendation
            recommendation={loadedRecommendation.results}
            movieType="Movie"
          />
        </div>
      </main>
      {showModal && <Modal />}
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const { params } = context;
  const movieId = params.id;

  const [fetchMovie, fetchCredits, fetchRecommendation] = await Promise.all([
    api.movie(movieId),
    api.creditsMovie(movieId),
    api.recommendationMovie(movieId),
  ]);

  return {
    props: {
      loadedMovieShows: fetchMovie,
      loadedCredits: fetchCredits,
      loadedRecommendation: fetchRecommendation,
    },
  };
};

export default MovieView;
