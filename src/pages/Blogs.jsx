import Hero from "../components/Hero";

import BlogCard from "../components/BlogCard";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Blogs = () => {
  const {blogData}=useContext(StoreContext)
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Heading */}
      <h1 className="text-3xl text-center font-bold my-6 text-gray-800">
        All Blogs
      </h1>

      {/* Description Paragraph */}
      <p className="text-base px-3 sm:text-lg leading-7 max-w-3xl mx-auto text-gray-600">
        Welcome to our blog section! Here, we share insightful articles,
        tutorials, and updates to help you stay informed about the latest
        technology trends, coding practices, and industry insights. 
        Whether you are a beginner looking to learn the basics or a professional 
        exploring advanced concepts, these blogs are designed to add value to your 
        journey. Stay curious, keep learning, and don’t forget to share your 
        thoughts in the comments section of each blog.
      </p>

      {/* Blogs Grid */}
      <div
        className="grid my-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-3 sm:px-4"
      >
          {blogData.map((blog,index) => (
          <BlogCard
            key={index}
            id={blog.id}
            title={blog.title}
            image={blog.image}
            category={blog.category}
            author_name={blog.author.name}
            author_image={blog.author.image}
            date={blog.createdAt}
          
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;