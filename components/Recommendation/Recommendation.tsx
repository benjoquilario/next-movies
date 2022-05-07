import { IMovie } from "../../lib/types"
import Thumbnail from "../Thumbnail/Thumbnail"

interface IRecommendationProps {
    recommendation: IMovie[];
    movieType: string;
}

const Recommendation = ({recommendation, movieType}: IRecommendationProps) => {
  return (
    <div className="mt-5">
        <div>
            <div className="mb-5">
                <h2 className="text-white text-[23px]">RECOMMENDED</h2>
                <h3 className="text-white opacity-70 text-base uppercase">{movieType}</h3>
            </div>
        </div>
        {recommendation?.length === 0 && 
                <div className="text-white text-center mt-12">
                    <h3 className="text-[43px] font-bold">Sorry!</h3>
                    <h4 className="opacity-70 text-[22px]">There are no recommended movies...</h4>
                </div>
        }
        <div className="relative grid grid-cols-[repeat(auto-fill,150px)] gap-3 justify-center items-center">
            
            {recommendation?.map(movie => 
                <Thumbnail key={movie.id} movie={movie} />
            )}
        </div>
    </div>
  )
}

export default Recommendation