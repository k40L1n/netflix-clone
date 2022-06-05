import { Movie } from '../typings'
import Image from 'next/image'
interface Props {
  movie: Movie
  // for firebase
  // movie: Movie | DoccumentData
}

function Thumbnail({ movie }: Props) {
  return (
    <div className="transition-200 relative  h-28 min-w-[180px] cursor-pointer transition ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail
