
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const SingleBlog = () => {
  const { id } = useParams();
  const { blogData } = useContext(StoreContext);

  const blog = blogData.find((b) => b._id.toString() === id);

  if (!blog) return <p>Blog not found</p>;

  const blogDate = blog.createdAt ? new Date(blog.createdAt) : null;
  const formattedDate = blogDate && !isNaN(blogDate)
    ? blogDate.toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      })
    : "No date available";

  return (
    <div className="rounded-md border-1 border-gray-200 p-5 max-w-3xl flex flex-col gap-3 items-center justify-center mx-auto py-8">
      <img
        className="transition-transform duration-300 hover:scale-105"
        src={`${process.env.REACT_APP_API_URL}/uploads/${blog.image}`}
        alt={blog.title}
      />
      <p className="text-2xl font-bold">{blog.title}</p>
      <p className="text-[#4B6BFB]">{blog.category}</p>
      <p>{blog.description}</p>
      <div className="flex gap-2 items-center justify-center">
        <p className="text-lg font-bold">Author: {blog.author.name}</p>
        <img
          className="w-8 h-8 rounded-full"
          src={`${process.env.REACT_APP_API_URL}/uploads/${blog.author.image}`}
          alt={blog.author.name}
        />
      </div>
      <p>{formattedDate}</p>
    </div>
  );
};

export default SingleBlog;