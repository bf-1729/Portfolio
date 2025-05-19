import React from "react";
import pizzaApp from "../images/pizza.png";
import Ecommerce from "../images/Ecommerce.png";
import crud from "../images/crud.png";
import quiz from "../images/quiz.png";
import searchbar from "../images/searchbar.png";
import auth from "../images/jwt.png";
import doctors from "../images/doctors.png";

const projects = [
  {
    id: 1,
    title: "Pizza Delivery Website",
    image: pizzaApp,
    stack: ["React", "Redux", "CSS", "BootStrap", "Node.js", "Express.js", "MongoDB"],
    demo: "https://pizzahut-frontend-site.vercel.app",
    code: "https://github.com/bf-1729/Pizza-delivery-App.git",
  },
  {
    id: 2,
    title: "Ecommerce Website",
    image: Ecommerce,
    stack: ["React", "Tailwind Css", "Node.js", "Express.js", "MongoDB"],
    demo: "https://buyease-frontend.vercel.app",
    code: "https://github.com/bf-1729/Ecommerce-App.git",
  },
  {
    id: 3,
    title: "JWT Authentication",
    image: auth,
    stack: ["React", "CSS", "Node.js", "Express.js", "MongoDB"],
    demo: "https://jwt-authentication-opal.vercel.app",
    code: "https://github.com/bf-1729/JWT-Authentication.git",
  },
  {
    id: 4,
    title: "CRUD Application",
    image: crud,
    stack: ["React", "Tailwind Css", "Node.js", "Express.js", "MongoDB"],
    demo: "https://crud-app-frontend-jade.vercel.app",
    code: "https://github.com/bf-1729/CRUD-App.git",
  },
  {
    id: 5,
    title: "Quiz Application",
    image: quiz,
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://quiz-app-beta-amber.vercel.app",
    code: "https://github.com/bf-1729/QuizApp.git",
  },
  {
    id: 6,
    title: "Autocomplete Searchbar",
    image: searchbar,
    stack: ["React", "Tailwind Css"],
    demo: "https://autocomplete-search-bar-phi.vercel.app",
    code: "https://github.com/bf-1729/Autocomplete-Search-Bar.git",
  },
  {
    id: 7,
    title: "Doctor Appointment Booking",
    image: doctors,
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://bf-1729.github.io/DoctorAppointmentBookingSystem",
    code: "https://github.com/bf-1729/DoctorAppointmentBookingSystem.git",
  },
];

const ProjectCard = ({ project }) => (
  <div data-aos="fade-up" data-aos-delay={project.id*100} className="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-purple-500/30 transition duration-300 group">
    <div className="overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-5">
      <h3 className="text-xl font-semibold text-purple-400 mb-3">{project.title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech, index) => (
          <span
            key={index}
            className="bg-purple-600 text-xs text-white px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between text-sm">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white font-medium transition"
        >
          Live Demo
        </a>
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-black px-4 py-2 rounded-md text-white font-medium transition"
        >
          View Code
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
          🚀 Projects I've Built
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
