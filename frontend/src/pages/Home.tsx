import React, { useState } from "react";
import { education, learning, myAge, projects, skills } from "./data";
import {
  IoIosLaptop,
  IoIosPhonePortrait,
  IoIosTabletPortrait,
} from "react-icons/io";
import ToggleBtn from "../components/ToggleBtn";
import { SideBarStateProps } from "../App";
import Modal from "../components/Modal";

interface HomeProps extends SideBarStateProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalImage: string;
  setModalImage: React.Dispatch<React.SetStateAction<string>>;
}

function Home({
  isSidebarOpen,
  setIsSidebarOpen,
  isModalOpen,
  setIsModalOpen,
  modalImage,
  setModalImage,
}: HomeProps) {
  const [activeTab, setActiveTab] = useState("knowledge");
  const [selectedImages, setSelectedImages] = useState<Record<number, string>>(
    projects.reduce((acc, project) => {
      acc[project.id] = project.images[0];
      return acc;
    }, {} as Record<number, string>)
  );
  const [selectedDevices, setSelectedDevices] = useState<
    Record<number, number>
  >(
    projects.reduce((acc, project) => {
      acc[project.id] = 0;
      return acc;
    }, {} as Record<number, number>)
  );

  const handleImageChange = (projectId: number, imageIndex: number) => {
    setSelectedImages((prev) => ({
      ...prev,
      [projectId]:
        projects.find((p) => p.id === projectId)?.images[imageIndex] ||
        prev[projectId],
    }));
    setSelectedDevices((prev) => ({
      ...prev,
      [projectId]: imageIndex,
    }));
  };
  const openModal = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  return (
    <main className={isSidebarOpen ? "" : "sidebar-closed"}>
      <ToggleBtn setIsSidebarOpen={setIsSidebarOpen} />
      <div id="home" className="first-section">
        <div className="intro-section">
          <h1 className="greeting">Hi there!</h1>
          <h1 className="name">I'm Jose Izquierdo</h1>
          <h2 className="role">Full Stack Web Developer</h2>
          <p className="description">
            Passionate about building web experiences with modern technologies
          </p>
        </div>
        <div className="work-section">
          <h1 className="title">What do I do?</h1>
          <p className="details">
            From front-end design to back-end logic, I bring ideas to life with
            clean and scalable code using React, Node.js and MongoDB.
          </p>
        </div>
        <div className="welcome-section">
          <h1>Welcome to my Portfolio</h1>
          <p className="welcome-text">
            Explore my projects and skills to see how I can contribute to your
            next big idea!
          </p>
        </div>
        <section className="skills-section">
          <div className="header-btns">
            <button
              className={activeTab === "knowledge" ? "active" : ""}
              onClick={() => setActiveTab("knowledge")}
            >
              Knowledge
            </button>
            <button
              className={activeTab === "learning" ? "active" : ""}
              onClick={() => setActiveTab("learning")}
            >
              Learning
            </button>
          </div>
          <div className="skills-container">
            <ul>
              {/* Dynamically rendering items */}
              {(activeTab === "knowledge" ? skills : learning).map((data) => {
                return (
                  <li className="skill" key={data.id}>
                    <img className="tech-icon" src={data.icon} alt="icon" />
                    <span>{data.skill}</span>
                  </li>
                );
              })}

              {/* Duplicate the list for seamless scrolling */}
              {(activeTab === "knowledge" ? skills : learning).map((data) => (
                <li className="skill" key={`dup-${data.id}`}>
                  <img className="tech-icon" src={data.icon} alt="icon" />
                  <span>{data.skill}</span>
                </li>
              ))}

              {/* {activeTab === "knowledge"
                ? skills.map((data) => (
                    <li className="skill" key={data.id}>
                      <img className="tech-icon" src={data.icon} alt="icon" />
                      <span>{data.skill}</span>
                    </li>
                  ))
                : learning.map((data) => {
                    return (
                      <li className="skill" key={data.id}>
                        <img className="tech-icon" src={data.icon} alt="icon" />
                        <span>{data.skill}</span>
                      </li>
                    );
                  })} */}
            </ul>
          </div>
        </section>
      </div>
      <section className="education-section">
        <h2 id="education">Education & Training</h2>
        <div className="education-timeline">
          {education.map((goal) => {
            return (
              <div className="timeline-item" key={goal.id}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4>{goal.name}</h4>
                    <span className="timeline-date">{goal.when}</span>
                  </div>
                  <div className="timeline-body">
                    <p className="institution">{goal.school}</p>
                    <p className="location">
                      <span className="location-icon">📍</span>
                      {goal.location}
                    </p>
                    {goal.achievements && goal.achievements.length > 0 && (
                      <div className="achievement-badges">
                        {goal.achievements.map((achievement, index) => (
                          <span key={index} className="badge">
                            {achievement}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="projects-section">
        <h2 id="projects">Projects</h2>
        <div className="project-container">
          {projects.map((project) => (
            <div className="projects" key={project.id}>
              <div>
                <div className="device-icons">
                  <span
                    className={
                      selectedDevices[project.id] === 0 ? "selected" : ""
                    }
                    onClick={() => handleImageChange(project.id, 0)}
                  >
                    <IoIosLaptop />
                  </span>
                  <span
                    className={
                      selectedDevices[project.id] === 1 ? "selected" : ""
                    }
                    onClick={() => handleImageChange(project.id, 1)}
                  >
                    <IoIosTabletPortrait />
                  </span>
                  <span
                    className={
                      selectedDevices[project.id] === 2 ? "selected" : ""
                    }
                    onClick={() => handleImageChange(project.id, 2)}
                  >
                    <IoIosPhonePortrait />
                  </span>
                </div>
                <figure>
                  <figcaption>{project.name}</figcaption>
                  <img
                    onClick={() => openModal(selectedImages[project.id])}
                    src={selectedImages[project.id]}
                    alt={`Image of ${project.name} in different devices`}
                  />
                </figure>
              </div>
              <p>{project.description}</p>
              <div className="skills-container">
                {project.skills.map((skill) => (
                  <span key={skill.id}>
                    <img src={skill.icon} alt={skill.skill} />
                    {skill.skill}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="about-me-section">
        <h2 id="about_me">About Me</h2>
        <p>
          My name full name is Jose Luis Izquierdo Hernandez, I'm {myAge} years
          old and I was born in Cuba, but currently reside in the United States.
        </p>
        <p>
          I began my studies at the University of Informatics Sciences in
          Havana, Cuba, where I gained a solid foundation in programming during
          my first year with <span className="highlight">C++</span>.
          Unfortunately, I couldn't finish university due to the situation in my
          country.
        </p>{" "}
        <p>
          After immigrating to the United States, I decided not to abandon my
          passion for coding. I joined Code The Dream for one year, where I
          received rigorous, intensive training in web development technologies
          like <span className="highlight">HTML, CSS, JavaScript</span> and{" "}
          <span className="highlight">React.js</span>. This program has allowed
          me to deepen my skills and prepare myself for the challenges of
          today's digital world.
        </p>{" "}
        <p>
          As part of my continuos learning journey, I recently completed an
          Udemy course on Back-End development, where I gained hands-on
          experience with <span className="highlight">Node.js</span>,
          <span className="highlight"> Express.js</span>,{" "}
          <span className="highlight"> MongoDB </span> and
          <span className="highlight"> Mongoose</span>.
        </p>
        <p>
          Currently, I plan to continue my university education to obtain a
          Bachelor's degree in Computer Science. I am refining my skills as a{" "}
          <span className="highlight">Front End Developer</span> while also
          exploring <span className="highlight">Back End Development</span> to
          gain a broader understanding of the field and specialize myself in one
          these two areas.
        </p>
      </section>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} image={modalImage} />
      )}
    </main>
  );
}

export default Home;
