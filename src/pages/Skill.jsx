import React from 'react'

const Skill = () => {
  const skillArray = [{ "id":1, "name": "HTML", "image": "https://img.icons8.com/ios-filled/144/22C3E6/html-5--v1.png" },
  { "id":2, "name": "CSS", "image": "https://img.icons8.com/ios-filled/144/22C3E6/css3.png" },
  { "id":3, "name": "JavaScript", "image": "https://img.icons8.com/color/144/javascript--v1.png" },
  { "id":4, "name": "React", "image": "https://img.icons8.com/officel/144/react.png" },
  { "id":5, "name": "BootStrap", "image": "https://img.icons8.com/fluency/144/bootstrap.png" },
  { "id":6, "name": "Tailwind CSS", "image": "https://img.icons8.com/color/144/tailwind_css.png" },
  { "id":7, "name": "Node.JS", "image": "https://img.icons8.com/fluency/144/node-js.png" },
  { "id":8, "name": "Express.JS", "image": "https://img.icons8.com/nolan/144/express-js.png" },
  { "id":9, "name": "Java", "image": "https://img.icons8.com/fluency/144/java-coffee-cup-logo.png" },
  { "id":10, "name": "Python", "image": "https://img.icons8.com/color/144/python--v1.png" },
  { "id":11, "name": "MySQL", "image": "https://img.icons8.com/color/144/mysql-logo.png" }

  ]
  return (
    <div id='skill' className='bg-gray-800 lg:-mt-12 mt-16 lg:w-3/4 w-11/12 mx-auto'>
      <div className='flex justify-center w-full'>
        <h1 className='font-bold text-center lg:text-4xl text-3xl bg-gradient-to-r bg-clip-text text-transparent from-teal-400 to-blue-600'>SKILLS</h1>
      </div>
      <div className='grid lg:grid-cols-4 grid-cols-3 gap-4 lg:mt-10 mt-4 gap-y-6'>

        {skillArray.map((item) => (
          <div className='transition delay-100 duration-200 ease-in hover:-translate-y-4'>
          <div data-aos="flip-left" data-aos-delay={item.id *50} className='hover:bg-slate-600 flex flex-col items-center bg-gray-900 lg:w-60 w-36 gap-2 rounded-lg py-4'>
            <img className='lg:w-36 w-24 lg:h-36 h-24' src={item.image} alt="html-5--v1" />
            <h1>{item.name}</h1>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skill
