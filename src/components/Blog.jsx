import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "../styles/blog.css";

const RepeatPhrase = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      threshold: 0.9,
    });
  }, []);

  const extractImage = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const img = doc.querySelector("img");
    return img ? img.src : "https://via.placeholder.com/300";
  };
  const stripHTML = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      const API_URL = `https://api.devlooper.me/blog`;

      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts.");
        }
        const blogs = await response.json();
    
        console.log(blogs);
        setPosts(blogs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="container py-2" id="blog">
        <div className="text-start mb-4 bloghead">
          <h2 className="text-shadow" style={{ color: "#00e6ac" }} data-aos="fade-left">
            Our Blog
          </h2>
          <h1 className="text-shadow text-white" data-aos="fade-left">
            Insights and Stories
          </h1>
        </div>
        <div className="row">
          {posts.map((post) => (
            <div className="col-md-4 mb-3" key={post.id} data-aos="fade-up">
              <div className="card h-100 blogpost">
                <img
                  src={post.imgSrc}
                  className="card-img-top"
                  alt={post.title}
                />
                <div className="card-body text-start">
                  <div style={{'minHeight':'140px'}}>
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.description}</p>
                  </div>
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                    Read More
                  </a>
                  <div className="mt-3 d-flex align-items-center">
                    <img
                      className="bg-success rounded-circle me-2"
                      style={{ width: "40px", height: "40px" }}
                      src="/favicon.jpg"
                    />
                    Devlooper | Published: {post.published}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepeatPhrase;
