import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
  const { title, cover_img, reading_time, author, author_img } = blog;
  console.log(blog);
  return (
    <div>
      <img src={cover_img} alt={`cover picture of the title ${title}`} />
      <div className="flex justify-between">
        <div>
          <img className="w-10 h-10" src={author_img} alt="" />
          <p>{author}</p>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
