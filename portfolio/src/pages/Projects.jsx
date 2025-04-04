import React from 'react'
import pizzaApp from "../images/pizza.png"
import Ecommerce from "../images/Ecommerce.png"
import crud from "../images/crud.png"
import quiz from "../images/quiz.png"
import searchbar from "../images/searchbar.png"
import auth from "../images/jwt.png"
import doctors from "../images/doctors.png"

const Projects = () => {
  const projectArray = [
    { "id": 1, "name": "Pizza Delivery Website", "image": pizzaApp, "techStack": "React, CSS, Node.js, Express.js, MongoDB", "demo": "https://pizzahut-frontend-site.vercel.app", "code": "https://github.com/bf-1729/Pizza-delivery-App.git" },
    { "id": 2, "name": "Ecommerce Website", "image": Ecommerce, "techStack": "React, Tailwind, Node.js, Express.js, MongoDB", "demo": "https://buyease-frontend.vercel.app", "code": "https://github.com/bf-1729/Ecommerce-App.git" },
    { "id": 3, "name": "JWT Authentication", "image": auth, "techStack": "React, CSS, Node.js, Express.js, MongoDB", "demo": "https://jwt-authentication-opal.vercel.app", "code": "https://github.com/bf-1729/JWT-Authentication.git" },
    { "id": 4, "name": "CRUD Application", "image": crud, "techStack": "React, Tailwind, Node.js, Express.js, MongoDB", "demo": "https://crud-app-frontend-jade.vercel.app", "code": "https://github.com/bf-1729/CRUD-App.git" },
    { "id": 5, "name": "Quiz Application", "image": quiz, "techStack": "HTML, CSS, JavaScript", "demo": "https://quiz-app-beta-amber.vercel.app", "code": "https://github.com/bf-1729/QuizApp.git" },
    { "id": 6, "name": "Autocomplete Searchbar", "image": searchbar, "techStack": "React, Tailwind", "demo": "https://autocomplete-search-bar-phi.vercel.app", "code": "https://github.com/bf-1729/Autocomplete-Search-Bar.git" },
    { "id": 7, "name": "Doctor Appointment Booking", "image": doctors, "techStack": "HTML, CSS, JavaScript", "demo": "https://bf-1729.github.io/DoctorAppointmentBookingSystem", "code": "https://github.com/bf-1729/DoctorAppointmentBookingSystem.git" }
  ]

  return (
    <div id='projects' className='container lg:mx-auto lg:w-4/5 w-full bg-gradient-to-r from-gray-900 to-black p-4 rounded-lg shadow-lg'>

      {/* Title Section */}
      <div className='flex justify-center w-full mb-8'>
        <h1 className='text-center text-5xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-teal-400 to-blue-600'>
          My Projects
        </h1>
      </div>

      {/* Project Cards Grid */}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 place-items-center'>

        {projectArray.map((item) => (
          <div key={item.id} data-aos="fade-up" className='group bg-gray-800 rounded-lg p-5 w-full max-w-sm shadow-xl hover:shadow-teal-500 transition duration-300'>

            {/* Project Image */}
            <div className='relative overflow-hidden rounded-lg'>
              <img className='w-full h-56 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105' src={item.image} alt={item.name} />
            </div>

            {/* Project Info */}
            <h2 className='mt-4 text-2xl font-semibold text-white text-center'>
              {item.name}
            </h2>
            <p className='text-gray-400 text-sm text-center mt-2'>{item.techStack}</p>

            {/* Buttons */}
            <div className='flex justify-center gap-4 mt-5'>
              <a href={item.demo} className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
                Demo
              </a>
              <a href={item.code} className="px-6 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition duration-300">
                Code
              </a>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Projects
