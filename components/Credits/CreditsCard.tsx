import Image from 'next/image';
import { BASE_URL } from '../../config';

interface IMember {
  member: string;
  name: string;
}

const CreditsCard = ({ member, name }: IMember) => {
  return (
    <div className="h-auto min-w-[42px] w-[44px] bg-transparent mx-[6px]">
      <figure className="relative w-full h-full overflow-hidden before:absolute before:w-full before:bg-[#152232] before:top-0 before:left-0 before:h-full before:w-full before:rounded-full">
        <Image
          src={`${member ? `${BASE_URL}${member}` : 'https://d-movie.netlify.app/static/media/No-Image-Placeholder.5f67f6811478c11aa79b.png'}`}
          alt={name}
          objectFit="cover"
          layout="responsive"
          width={42}
          height={42}
          className="rounded-full"
        />
      </figure>
    </div>
  );
};

export default CreditsCard;
