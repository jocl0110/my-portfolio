import { useState } from "react";
import { education, learning, myAge, skills } from "./data";
function Home() {
  const [activeTab, setActiveTab] = useState("knowledge");
  return (
    <main>
      <section>
        <h1 id="home">Jose | Izquierdo</h1>
        <h3>Full-Stack Developer</h3>
      </section>
      <section>
        <h2 id="education">Education & Training</h2>
        <div>
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
        <div>
          <h3>Skills</h3>
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
                      <img
                        style={{ width: "24px" }}
                        src={data.icon}
                        alt="icon"
                      />
                      <span>{data.skill}</span>
                    </li>
                  );
                })}
          </ul>
        </div>
      </section>
      <section>
        <h2 id="projects">Projects</h2>
        <div></div>
      </section>
      <section>
        <h2 id="about_me">About Me</h2>
        <p>
          My name is Jose Izquierdo, I'm {myAge} years old and I was born in
          Cuba, but currently reside in the United States. Since childhood, my
          fascination with computers led me to decide early on that I wanted to
          explore their creative potential. I began my studies at the{" "}
          <abbr title="University of Informatics Sciences">UCI</abbr> in Cuba,
          where I gained a solid foundation in programming during my first year
          with C++. After immigrating to the United States, I decided not to
          abandon my passion for coding. I joined Code The Dream for one year,
          where I received rigorous, intensive training in web development. This
          program has allowed me to deepen my skills and prepare myself for the
          challenges of today's digital world. Currently, I have plans to
          continue my university education to obtain a Bachelor's degree in
          Computer Science. I am refining my skills as a Front End Developer
          while also exploring Back End Development to gain a comprehensive
          understanding of software development, which has been my ultimate goal
          from the beginning. To further expand my knowledge, I took a Udemy
          course where I learned backend development using Node.js, Express, and
          MongoDB with Mongoose. This experience allowed me to build
          full-fledged applications with authentication, database management,
          and RESTful APIs. With this addition to my skill set, I have
          officially transitioned into a Full Stack Developer, capable of
          working on both the client and server sides of web applications.
        </p>
      </section>
    </main>
  );
}

export default Home;
