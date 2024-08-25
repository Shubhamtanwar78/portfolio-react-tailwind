// src/components/AboutMe.js
import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
            About Me
          </h1>

          <div className="text-black">
            <div>
              <p className="text-xl mb-4">
                Hello! I'm Shubham Tanwar, a passionate and detail-oriented
                Frontend Developer with 4 years of experience in crafting
                beautiful and responsive web interfaces. I thrive on creating
                intuitive and engaging user experiences. I love to work where I
                can learn new things and enhance my skills. I deeply believe in
                that nothing is Impossible. I am a quick learner, optimistic,
                adaptive, Innovative and creative.
              </p>
              <p className="text-xl mb-4">
                I specialize in building and maintaining interactive and dynamic
                websites using modern web technologies such as HTML, CSS,
                JavaScript, and frameworks like React. Over the years, I've
                collaborated with cross-functional teams to deliver high-quality
                web applications that meet client requirements and exceed user
                expectations.
              </p>
              <h1 className="text-2xl font-bold mb-4">Technical Skills</h1>
              <ul className="list-disc pl-10">
                <li>
                  <p className="text-xl mb-4">
                    <span className="font-bold">Languages: </span> HTML, CSS,
                    JavaScript
                  </p>
                </li>
                <li>
                  <p className="text-xl mb-4">
                    <span className="font-bold">Frameworks/Libraries: </span>{" "}
                    React.Js, Next.Js, Node.Js, .NetCore
                  </p>
                </li>
                <li>
                  <p className="text-xl mb-4">
                    <span className="font-bold">Tools: </span> Git, npm, Yarn
                  </p>
                </li>
                <li>
                  <p className="text-xl mb-4">
                    <span className="font-bold">Design: </span> Figma, Adobe XD
                  </p>
                </li>
              </ul>

              <h1 className="text-2xl font-bold mb-4">Notable Projects</h1>
              <ul className="list-disc pl-10">
                <li>
                  <p className="text-xl mb-4">
                    <span className="font-bold">E-commerce Platform: </span>{" "}
                    Developed a scalable and responsive e-commerce platform
                    using React and Redux, resulting in a 30% increase in
                    customer engagement.
                  </p>
                </li>
                <li>
                  <p className="text-xl mb-4">
                    <span className="font-bold">Portfolio Website: </span>{" "}
                    Created a personal portfolio website to showcase my projects
                    and skills, which has helped me connect with potential
                    employers and clients.
                  </p>
                </li>
                <li>
                  <p className="text-xl mb-4">
                    <span className="font-bold">
                      Open Source Contributions:{" "}
                    </span>{" "}
                    Actively contributed to various open-source projects on
                    GitHub, including popular React libraries and tools.
                  </p>
                </li>
              </ul>

              <h1 className="text-2xl font-bold mb-4">Personal Interests</h1>
              <p className="text-xl mb-4">
                When I'm not coding, I enjoy hiking, photography, and exploring
                new technologies. I'm an avid learner who loves attending tech
                meetups and conferences to stay updated with the latest trends
                in web development.
              </p>

              <h1 className="text-2xl font-bold mb-4">Let's Connect</h1>
              <p className="text-xl mb-4">
                I'm always open to new opportunities and collaborations. Feel
                free to reach out to me on <br />
                <br />
                LinkedIn:- https://linkedin.com/in/shubham-tanwar-267384237/
                <br />
                GitHub:- https://github.com/Shubhamtanwar78 <br />
                <br />
                Let's create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
