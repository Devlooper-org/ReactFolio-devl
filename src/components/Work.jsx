import React, { useEffect, useState } from "react";
import '../styles/Work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons/faAngleDoubleDown";
import AOS from 'aos';
import work1 from '../assets/WorkImg1.png';
import work2 from '../assets/WorkImg2.png';
import 'aos/dist/aos.css';

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      threshold: 0.9,
    });
  }, []);

  // Project data array with links added
  const projects = [
    { id: 1, title: "UIUX Design / MOSEOM 2022", imgSrc: work1, link: "https://example.com/moseom-2022" },
    { id: 2, title: "UIUX Design / MOSEOM 2022", imgSrc: work2, link: "https://example.com/moseom-2022" },
    { id: 3, title: "UIUX Design / MUSIC PLAYER 2019", imgSrc: work1, link: "https://example.com/music-player-2019" },
    { id: 4, title: "Web Design / E-COMMERCE PLATFORM 2021", imgSrc: work2, link: "https://example.com/ecommerce-2021" },
    { id: 5, title: "Mobile App / FITNESS APP 2023", imgSrc: work1, link: "https://example.com/fitness-app-2023" },
    { id: 6, title: "Branding / TECH CONFERENCE 2020", imgSrc: work2, link: "https://example.com/tech-conference-2020" },
    // Add more projects as needed
  ];

  // State to control the number of projects to display
  const [visibleProjects, setVisibleProjects] = useState(3);

  // Function to load more projects
  const loadMore = () => {
    setVisibleProjects(prevVisible => prevVisible + 3);
  };

  return (
    <div className="work-container container" id="portfolios">
      <div className="work-text">
        <h2 className="text-shadow" data-aos="fade-left">Our Work</h2>
        <h1 className="text-white text-shadow" data-aos="fade-left">
          How we can produce work that you are interested in
        </h1>
      </div>

      <div className="Work-Img row">
        {projects.slice(0, visibleProjects).map((project) => (
          <div className="col-md-4" key={project.id} data-aos="fade-up">
            <p>{project.title}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.imgSrc} alt={project.title} />
            </a>
          </div>
        ))}
      </div>

      {visibleProjects < projects.length && (
        <button className="btn mx-auto btn-outline-light mt-5 view-more" onClick={loadMore}>
          View More <FontAwesomeIcon icon={faAngleDoubleDown} />
        </button>
      )}
    </div>
  );
};

export default Work;
