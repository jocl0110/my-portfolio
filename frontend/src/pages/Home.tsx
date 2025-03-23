import { useState } from "react";
import { education, learning, myAge, projects, skills } from "./data";
import {
  IoIosLaptop,
  IoIosPhonePortrait,
  IoIosTabletPortrait,
} from "react-icons/io";
import ToggleBtn from "../components/ToggleBtn";
import { SideBarStateProps } from "../App";

function Home({ isSidebarOpen, setIsSidebarOpen }: SideBarStateProps) {
  const [activeTab, setActiveTab] = useState("knowledge");

  return (
    <main className={isSidebarOpen ? "" : "sidebar-closed"}>
      <ToggleBtn
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <section className="skills-section">
        <div>
          <h4 onClick={() => setActiveTab("knowledge")}>Skills I have</h4>
          <h4 onClick={() => setActiveTab("learning")}>Skills I'm learning</h4>
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
          {projects.map((project) => {
            const [selectedImage, setSelectedImage] = useState(
              project.images[0]
            );
            return (
              <div key={project.id}>
                <div>
                  <span>
                    <IoIosLaptop
                      onClick={() => setSelectedImage(project.images[0])}
                    />
                  </span>
                  <span>
                    <IoIosTabletPortrait
                      onClick={() => setSelectedImage(project.images[1])}
                    />
                  </span>
                  <span>
                    <IoIosPhonePortrait
                      onClick={() => setSelectedImage(project.images[2])}
                    />
                  </span>
                  <img
                    style={{
                      width: "100px",
                      transition: "opacity 0.3s ease-in-out",
                    }}
                    src={selectedImage}
                    alt={`Image of ${project.name} in different devices`}
                  />
                </div>
                <p>Title: {project.name}</p>
                <p> Summary: {project.description}</p>
                <p>Built using: {project.skills}</p>
                <a target="_blank" href={project.github}>
                  Check it out here!
                </a>
              </div>
            );
          })}
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
    </main>
  );
}

export default Home;
