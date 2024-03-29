import Image from 'next/image';
import test_image from '../public/test-image.jpg';

const BlogDetails = () => (
  <div>
    BlogDetails
    <article>
      <Image
        src={test_image}
        alt={'test'}
        width={300}
        height={300}
      />
      <div>
        <h1>Blog Title</h1>

        <p>Blog content</p>
      </div>
    </article>
  </div>
);

export default BlogDetails;
