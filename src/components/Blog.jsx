import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import "../styles/blog.css";
import work1 from "../assets/WorkImg1.png";
import work2 from "../assets/WorkImg2.png";

const RepeatPhrase = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
      });
    }, []);
    const posts = [
      {
        id: 1,
        title: "Understanding UI/UX Design Principles",
        description: "A guide to the core principles of user interface and user experience design...",
        imgSrc: work1,
        link: "https://example.com/uiux-design-principles",
      },
      {
        id: 2,
        title: "Web Development Trends in 2024",
        description: "Discover the latest trends in web development for 2024, including frameworks, tools, and techniques...",
        imgSrc: work1,
        link: "https://example.com/web-development-trends",
      },
      {
        id: 3,
        title: "Effective Branding Strategies",
        description: "Learn how to create a strong brand identity and connect with your target audience...",
        imgSrc: work1,
        link: "https://example.com/branding-strategies",
      },
    ];
  return (
    <div>
    <div className="container py-2" id="blog">
      <div className="text-start mb-4 bloghead">
        <h2 className="text-shadow" style={{color: "#00e6ac"}} data-aos="fade-left" >Our Blog</h2>
        <h1 className="text-shadow text-white" data-aos="fade-left">Insights and Stories</h1>
      </div>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4 mb-3" key={post.id} data-aos="fade-up">
            <div className="card h-100 blogpost">
              <img src={post.imgSrc} className="card-img-top" alt={post.title} />
              <div className="card-body text-start">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                  Read More
                </a>
                <div className="mt-3 d-flex align-items-center"><span className="bg-success rounded-circle me-2" style={{width:'40px',height:'40px'}}></span>Vishal Yadav - 23th October 2024</div>
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
