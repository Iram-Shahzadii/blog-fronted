import { Link } from "react-router-dom";

const BlogCard = ({ id, title, category, image, author_name, author_image, date }) => {
  const API_URL = process.env.REACT_APP_API_URL;

  return (
    <div className="border border-gray-200 shadow-md rounded-md overflow-hidden bg-white">
      {/* Blog Image */}
      <Link to={`/blog/${id}`}>
        <img
          src={`${API_URL}/uploads/${image}`}
          alt=""
          className="w-full h-48 object-cover cursor-pointer transform duration-300 hover:scale-105"
        />
      </Link>

      {/* Blog Content */}
      <div className="p-4">
        <p className="text-[#4b6bfb] font-semibold mb-2">{category}</p>
        <h1 className="text-xl font-bold leading-snug mb-3">{title}</h1>

        {/* Author Section */}
        <div className="flex items-center gap-3 mt-4">
          <img
            src={`${API_URL}/uploads/${author_image}`}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-lg font-bold text-gray-600">{author_name}</p>
            <p className="text-lg font-bold text-gray-600">
              {new Date(date).toLocaleDateString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;