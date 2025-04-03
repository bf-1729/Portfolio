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
    { "id":1, "name": "Pizza Delivery Website", "image": pizzaApp, "techStack": "React, css, Node.js, Express.js, MongoDB","demo":"https://pizzahut-frontend-site.vercel.app","code":"https://github.com/bf-1729/Pizza-delivery-App.git" },
    { "id":2, "name": "Ecommerce Website", "image": Ecommerce, "techStack": "React, Tailwind, Node.js, Express.js, MongoDB","demo":"https://buyease-frontend.vercel.app","code":"https://github.com/bf-1729/Ecommerce-App.git" },
    { "id":3, "name": "JWT Authentication", "image": auth, "techStack": "React, Css, Node.js, Express.js, MongoDB", "demo":"https://jwt-authentication-opal.vercel.app","code":"https://github.com/bf-1729/JWT-Authentication.git" },
    { "id":4, "name": "CRUD Application", "image": crud, "techStack": "React, Tailwind, Node.js, Express.js, MongoDB","demo":"https://crud-app-frontend-jade.vercel.app","code":"https://github.com/bf-1729/CRUD-App.git" },
    { "id":5, "name": "Quiz Application", "image": quiz, "techStack": "Html, Css, JavaScript","demo":"https://quiz-app-beta-amber.vercel.app","code":"https://github.com/bf-1729/QuizApp.git" },
    { "id":6, "name": "Autocomplete Searchbar", "image": searchbar, "techStack": "React, Tailwind","demo":"https://autocomplete-search-bar-phi.vercel.app","code":"https://github.com/bf-1729/Autocomplete-Search-Bar.git" },
    { "id":7, "name": "Doctor Appointment Booking", "image": doctors, "techStack": "Html, Css, JavaScript","demo":"https://bf-1729.github.io/DoctorAppointmentBookingSystem","code":"https://github.com/bf-1729/DoctorAppointmentBookingSystem.git" }
  ]
  return (
    <div id='projects' className='container mx-auto lg:w-3/4 w-full lg:mt-14 mt-[0rem] bg-gray-800 h-fit'>
      <div className='flex justify-center w-full'>
        <h1 className='font-bold text-center lg:text-4xl text-3xl bg-gradient-to-r bg-clip-text text-transparent from-teal-400 to-blue-600'>PROJECTS</h1>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-x-4 gap-10 lg:mt-10 mt-4 my-8 w-full mx-auto'>

        {projectArray.map((item) => (
          <div className='break-all transition delay-100 duration-300 lg:hover:-translate-y-4'>
          <div data-aos="fade-up" className='flex flex-col items-center bg-gray-900 p-4 lg:gap-2 gap-4 rounded-lg lg:w-full h-full w-55'>
            <h1 className='text-center lg:text-xl text-lg'>{item.name}</h1>
            <img className='lg:w-56 w-full lg:h-[250px] h-72 object-cover' src={item.image}></img>
            <p className='text-sm'><b>Tech Stack </b> : {item.techStack}</p>
            <div className='flex gap-4'>
              <a href={item.demo} className="lg:text-[16px] text-nowrap text-md lg:h-fit h-10 lg:px-7 px-12 lg:py-1.5 py-1.5 cursor-pointer text-black font-semibold rounded-lg bg-blue-400 hover:text-white hover:shadow-[0_0_10px_#00ff95] transition duration-300">
                Demo
              </a>
              <a href={item.code} className="text-left text-nowrap lg:text-[16px] bg-orange-400 text-md lg:px-4 px-8 cursor-pointer lg:py-1.5 py-1.5 text-black font-semibold rounded-lg hover:text-white hover:bg-gray hover:shadow-[0_0_10px_#00ff95] transition duration-300">
                Source Code
              </a>
            </div>
          </div>
          </div>
        ))}



      </div>
    </div>
  )
}

export default Projects
