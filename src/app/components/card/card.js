import Image from 'next/image';
import test_image from '../../public/test-image.jpg';
import config from '../../config';

const Card = ({ title, description, image }) => {
  return (
    <article>
      <Image
        src={image}
        alt={'title'}
        width={300}
        height={300}
      />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Card;
