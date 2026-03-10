import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blogs", error);
    }
  };

  const getInitials = (name = "") => {
    return name
      .split(" ")
      .map(word => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section className="blog-section">
      <div className="blog-container">

        <h2 className="section-title">Real Estate Insights</h2>
        <p className="section-subtitle">
          Latest trends, investment tips, and market insights
        </p>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog._id}>

              <img
                src={blog.image}
                alt={blog.title}
                className="blog-image"
              />

              <div className="blog-content">

                <h3 className="blog-title">{blog.title}</h3>

                <p className="blog-excerpt">
                  {blog.excerpt}
                </p>

                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-btn"
                >
                  Read Full Article
                </a>

                <div className="blog-author">
                  <div className="author-avatar">
                    {getInitials(blog.author?.name)}
                  </div>

                  <div className="author-info">
                    <h4>{blog.author?.name}</h4>
                    <p>{blog.author?.role}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;