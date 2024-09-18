import PropTypes from "prop-types";
import { IoBookmarkOutline } from "react-icons/io5";
export default function Blog({ blog,handleAddtoBookmark,handleReadingTime}) {
  const {
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="border-b-2">
      <div>
        <img
          className="w-[845px] h-[450px] mb-[34px] mt-8"
          src={cover}
          alt={`this is a cover image for every author`}
        />
      </div>
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-6 items-center justify-center">
          <img
            className="w-[60px] h-[60px] rounded-full"
            src={author_img}
            alt={`This is a author img`}
          />
          <div>
            <h3 className="text-[#111] text-2xl font-bold">{author}</h3>
            <p className="text-[#11111199] text-[16px] font-semibold">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#11111199] text-xl font-medium">0{reading_time} min read</span>
          <button onClick = {()=>handleAddtoBookmark(blog)}>
            <IoBookmarkOutline className='w-[24px] h-[24px]'></IoBookmarkOutline>
          </button>
        </div>
      </div>
      <h1 className="text-4xl mb-4 text-[#111] font-bold">{title}</h1>
      <p className="mb-5 text-[#11111199]">
        {hashtags.map((hashtag, idx) => (
          <span key={idx}>
            <a href="#" className="mr-3">
              {hashtag}
            </a>
          </span>
        ))}
      </p>
      <button onClick = {()=>handleReadingTime(reading_time)} className="text-[#6047EC] mb-[39px] font-semibold">Mark as Read</button>
    </div>
  );
}
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddtoBookmark:PropTypes.func,
  handleReadingTime:PropTypes.func
};
