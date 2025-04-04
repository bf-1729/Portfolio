import React from 'react'

const Skill = () => {
  const skillArray = [
    { "id": 1, "name": "HTML", "image": "https://img.icons8.com/ios-filled/144/22C3E6/html-5--v1.png" },
    { "id": 2, "name": "CSS", "image": "https://img.icons8.com/ios-filled/144/22C3E6/css3.png" },
    { "id": 3, "name": "JavaScript", "image": "https://img.icons8.com/color/144/javascript--v1.png" },
    { "id": 4, "name": "React", "image": "https://img.icons8.com/officel/144/react.png" },
    { "id": 5, "name": "BootStrap", "image": "https://img.icons8.com/fluency/144/bootstrap.png" },
    { "id": 6, "name": "Tailwind CSS", "image": "https://img.icons8.com/color/144/tailwind_css.png" },
    { "id": 7, "name": "Node.JS", "image": "https://img.icons8.com/fluency/144/node-js.png" },
    { "id": 8, "name": "Express.JS", "image": "https://img.icons8.com/nolan/144/express-js.png" },
    { "id": 9, "name": "Java", "image": "https://img.icons8.com/fluency/144/java-coffee-cup-logo.png" },
    { "id": 10, "name": "Python", "image": "https://img.icons8.com/color/144/python--v1.png" },
    { "id": 11, "name": "MySQL", "image": "https://img.icons8.com/color/144/mysql-logo.png" }
  ];

  return (
    <div id='skill' className='bg-gradient-to-r from-gray-900 to-black mx-auto lg:w-4/5 w-full p-8 rounded-lg shadow-xl'>

      {/* Title Section */}
      <div className='flex justify-center w-full mb-10'>
        <h1 className='text-center lg:text-5xl text-3xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-teal-400 to-blue-600'>
          My Skills
        </h1>
      </div>

      {/* Skill Cards Grid */}
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 place-items-center'>

        {skillArray.map((item) => (
          <div key={item.id} className='relative group'>
            <div 
              data-aos="flip-left" 
              data-aos-delay={item.id * 50} 
              className='bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg shadow-gray-800 
                         hover:shadow-teal-500/60 transition-transform transform hover:scale-110
                         flex flex-col items-center w-44 lg:w-52 border border-gray-700 hover:border-teal-400'
            >
              {/* Skill Icon */}
              <img className='w-20 lg:w-28 transition-all duration-300 group-hover:scale-110' src={item.image} alt={item.name} />

              {/* Skill Name */}
              <h1 className='mt-3 text-gray-300 text-lg font-semibold'>
                {item.name}
              </h1>
            </div>

            {/* Glowing Effect on Hover */}
            <div className='absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 
                           opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 rounded-2xl'>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skill
