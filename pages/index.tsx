import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Row from '../components/Row/Row';
import { API_URL } from '../config';
import { IMovies } from '../lib/types';
import request from '../lib/services/helper';
import getJSON from '../lib/services/requests';
import Head from 'next/head';
import SearchForm from '../components/Search/SearchForm';

interface IHomePops {
  trending: IMovies;
  topRated: IMovies;
  action: IMovies;
  horror: IMovies;
  comedy: IMovies;
  romance: IMovies;
  documentaries: IMovies;
}

const Home = ({
  trending,
  topRated,
  action,
  horror,
  comedy,
  romance,
  documentaries,
}: IHomePops) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#151f2e]">
      <Head>
        <title>Next Movies</title>
      </Head>
      <Header />
      <main className="mt-[90px]">
        <section className="px-[4%]">
          <SearchForm />
        </section>
        <section className="px-[4%]">
          <Row title="Trending Now" movies={trending.results} />
          <Row title="Top Rated" movies={topRated.results} />
          <Row title="Action Movies" movies={action.results} />
          <Row title="Horror Movies" movies={horror.results} />
          <Row title="Comedy Movies" movies={comedy.results} />
          <Row title="Romance Movies" movies={romance.results} />
          <Row title="Documentaries" movies={documentaries.results} />
        </section>
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  const [
    fetchTrending,
    fetchTopRated,
    fetchAction,
    fetchHorror,
    fetchComedy,
    fetchRomance,
    fetchDocumentaries,
  ] = await Promise.all([
    getJSON(`${API_URL}${request.fetchTrending}`),
    getJSON(`${API_URL}${request.fetchTopRated}`),
    getJSON(`${API_URL}${request.fetchActionMovies}`),
    getJSON(`${API_URL}${request.fetchHorrorMovies}`),
    getJSON(`${API_URL}${request.fetchComedyMovies}`),
    getJSON(`${API_URL}${request.fetchRomanceMovies}`),
    getJSON(`${API_URL}${request.fetchDocumentaries}`),
  ]);


  return {
    props: {
      trending: fetchTrending,
      topRated: fetchTopRated,
      action: fetchAction,
      horror: fetchHorror,
      comedy: fetchComedy,
      romance: fetchRomance,
      documentaries: fetchDocumentaries,
    },
  };
};

export default Home;
