import Head from 'next/head';
import Banner from '../../components/Banner/Banner';
import InfoBox from '../../components/InfoBox/InfoBox';
import Recommendation from '../../components/Recommendation/Recommendation';
import { API_URL, BASE_URL } from '../../config';
import { API_KEY } from '../../lib/services/helper';
import { getJSON } from '../../lib/services/requests';
import { ICredits, IMovies, IMovieInfo } from '../../lib/types';

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
          Tv Shows | {loadedTvShows?.original_title || loadedTvShows?.title || loadedTvShows?.original_name}
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

  const [fetchMovie, fetchCredits, fetchRecommendation] = await Promise.all([
    getJSON(`${API_URL}/tv/${movieId}?api_key=${API_KEY}`),
    getJSON(`${API_URL}/tv/${movieId}/credits?api_key=${API_KEY}`),
    getJSON(`${API_URL}/tv/${movieId}/recommendations?api_key=${API_KEY}`)
  ]);

  return {
    props: {
      loadedTvShows: fetchMovie,
      loadedCredits: fetchCredits,
      loadedRecommendation: fetchRecommendation
    },
  };
};

export default TvShowsView;
