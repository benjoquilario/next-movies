import Image from "next/image";
interface IImageProps {
    movieImage: string
}

const Image = ({movieImage}: IImageProps) => {
  return (
    <div className="w-full min-w-full h-full block">
              <Image
                objectFit="cover"
                src={`${BASE_URL}${movieImage?.poster_path || movieInfo?.backdrop_path}`}
                width={318}
                height={440}
                alt="halo"
              />
    </div>
  )
}

export default Image