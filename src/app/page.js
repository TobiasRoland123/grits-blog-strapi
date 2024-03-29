import Image from 'next/image';
import Card from './components/card/card';
import config from './config';

const fetchBlogs = async (params) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };
  const request = await fetch(`${config.api}/api/blogs?populate=*`, reqOptions);
  const response = await request.json();
  return response;
};

const Home = async () => {
  const blogs = await fetchBlogs();

  console.log('blogs', blogs.data.attributes);

  return (
    <div>
      Home
      <div className='border-red-500 min-h-5 w-full border'>
        {blogs.data.map((blog) => {
          console.log('blog-FeaturedImage:', blog.attributes.FeaturedImage.data.attributesurl);
          return (
            <Card
              key={blog.id}
              title={blog.attributes.Title}
              description={blog.attributes.Content}
              image={`${config.api}${blog.attributes.FeaturedImage.data.attributes.url}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
