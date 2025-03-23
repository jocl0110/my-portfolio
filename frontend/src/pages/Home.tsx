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
      <ToggleBtn
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <section className="skills-section">
        <div>
          <h4 onClick={() => setActiveTab("knowledge")}>Knowledge</h4>
          <h4 onClick={() => setActiveTab("learning")}>Learning</h4>
        </div>
        <div>
          <ul>
            {activeTab === "knowledge"
              ? skills.map((data) => (
                  <li key={data.id}>
                    <img style={{ width: "24px" }} src={data.icon} alt="icon" />
                    <span>{data.skill}</span>
                  </li>
                ))
              : learning.map((data) => {
                  return (
                    <li key={data.id}>
                      <img src={data.icon} alt="icon" />
                      <span>{data.skill}</span>
                    </li>
                  );
                })}
          </ul>
        </div>
      </section>
      <section className="education-section">
        <h2 id="education">Education & Training</h2>

        <div className="education-container">
          <ul>
            {education.map((goal) => {
              return (
                <li key={goal.id}>
                  <h4>{goal.name}</h4>
                  <p>{goal.when}</p>
                  <p>{goal.school}</p>
                  <p>{goal.location}</p>
                </li>
              );
            })}
          </ul>
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
      <section>
        <h2 id="about_me">About Me</h2>
        <p>
          My name is Jose Izquierdo, I'm {myAge} years old and I was born in
          Cuba, but currently reside in the United States. I began my studies at
          the University of Informatics Sciences in Havana, Cuba, where I gained
          a solid foundation in programming during my first year with C++. After
          immigrating to the United States, I decided not to abandon my passion
          for coding. I joined Code The Dream for one year, where I received
          rigorous, intensive training in web development. This program has
          allowed me to deepen my skills and prepare myself for the challenges
          of today's digital world. Currently, I have plans to continue my
          university education to obtain a Bachelor's degree in Computer
          Science. I am refining my skills as a Front End Developer while also
          exploring Back End Development to gain a comprehensive understanding
          of software development, which has been my ultimate goal from the
          beginning.
        </p>
      </section>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} image={modalImage} />
      )}
    </main>
  );
}

export default Home;
