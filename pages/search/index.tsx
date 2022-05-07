import Head from "next/head";
import api from "../../api";
import SearchResults from "../../components/Search/SearchResults";
import { IMovies } from '../../lib/types/';

interface ISearchProps {
  searchResults: IMovies;
  searchTerm: string;
}

const Search = ({searchResults, searchTerm}: ISearchProps ) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0B1622]">
      <Head>
        <title>
          {`${searchTerm} - Search Results`}
        </title>
      </Head>
      <main>
        <SearchResults searchResults={searchResults.results} searchTerm={searchTerm} />
      </main>
    </div>
  )
}

export const getServerSideProps = async (context: any) => {
  const { query } = context;
 
  const fetchSearch = await api.searchMovies(query.term);

  return {
    props: {
      searchResults: fetchSearch,
      searchTerm: query.term
    }
  }
}


export default Search;