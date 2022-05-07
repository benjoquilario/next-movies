import Head from 'next/head';
import Banner from '../../components/Banner/Banner';
import InfoBox from '../../components/InfoBox/InfoBox';
import Recommendation from '../../components/Recommendation/Recommendation';
import { BASE_URL } from '../../config';
import { ICredits, IMovies, IMovieInfo } from '../../lib/types'
import api from '../../api';

interface ILoadedTVShow {
  loadedTvShows: IMovieInfo;
  loadedCredits: ICredits;
  loadedRecommendation: IMovies;
}

const TvShowsView = ({ loadedTvShows, loadedCredits, loadedRecommendation }: ILoadedTVShow) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0B1622]">
      <Head>
        <title>
          {loadedTvShows?.original_title || loadedTvShows?.title || loadedTvShows?.original_name}
        </title>
      </Head>
      <main>
        <Banner selectedBanner={`${BASE_URL}/${loadedTvShows.backdrop_path}`} />
        <div className="relative bg-[#151f2e] w-full min-h-[800px] max-w-[1170px] mx-auto mt-[-75px] p-4 rounded-t-lg">
          <InfoBox credits={loadedCredits} movieInfo={loadedTvShows} />
          <Recommendation recommendation={loadedRecommendation.results} movieType="TV" />
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const { params } = context;
  const movieId = params.id;
  
  const [fetchTv, fetchCredits, fetchRecommendation] = await Promise.all([
    api.tv(movieId), api.creditsTv(movieId), api.recommendationTv(movieId),
  ]);

  return {
    props: {
      loadedTvShows: fetchTv,
      loadedCredits: fetchCredits,
      loadedRecommendation: fetchRecommendation
    },
  };
};


export default TvShowsView;