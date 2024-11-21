import React, { useEffect, useState } from "react";
import '../styles/Work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons/faAngleDoubleDown";
import AOS from 'aos';
import upiarch from '../assets/upiarch.jpg';
import dronebots from '../assets/dronebots.jpg';
import animegoat from '../assets/animegoat.jpg';
import playdisk from '../assets/playdisk.jpg';
import clawbox from '../assets/clawbox.jpg';
import dimarlyx from '../assets/dimarlyx.jpg';
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

  const projects = [
    { id: 1, title: "E-Com / Dronebots", imgSrc: dronebots, link: "https://dronebots.in" },
    { id: 2, title: "Gateway / Upiarch", imgSrc: upiarch, link: "https://example.com/moseom-2022" },
    { id: 3, title: "Streaming / Animegoat", imgSrc: animegoat, link: "https://example.com/music-player-2019" },
    { id: 4, title: "Webapp / Clawbox", imgSrc: clawbox, link: "https://example.com/ecommerce-2021" },
    { id: 5, title: "Webapp / Playdisk", imgSrc: playdisk, link: "https://example.com/fitness-app-2023" },
    { id: 6, title: "Landing / Dimarlyx", imgSrc: dimarlyx, link: "https://example.com/tech-conference-2020" },
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
          <div className="col-md-4 rounded" key={project.id} data-aos="fade-up">
            <p className="text-white">{project.title}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.imgSrc} className="rounded" alt={project.title} />
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
