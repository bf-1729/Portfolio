import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const email = "mlakshminarasimha95@gmail.com"
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const serviceID = 'service_hx1bs7j';
    const templateID = 'template_omyokfm';
    const userID = 'BMEtkYV-VjC0oydgc';
  
    var templateParams = {
      from_name: form.name,
      to_name: "Manti Lakshmi",
      reply_to: form.email, // Use this instead of from_email
      message: `From: ${form.email}\n\n${form.message}`, // Include user email inside the message
    };
  
    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" }); // Reset form
      },
      (error) => {
        console.log('FAILED...', error);
        alert("Something went wrong. Please try again.");
      }
    );
  };
  

  return (
    <div id='contact' className='lg:w-4/5 w-11/12 mx-auto py-16'>
      <div className='text-center mb-12'>
        <h1 className='font-bold lg:text-4xl text-4xl bg-gradient-to-r bg-clip-text text-transparent from-teal-400 to-blue-600'>
          Contact Me
        </h1>
        <p className='text-gray-500 mt-3 text-lg'>I'm open to any opportunities, questions, or collaborations. Feel free to reach out!</p>
      </div>

      <div className='flex lg:flex-row flex-col gap-12'>
        {/* Contact Information Section */}
        

        {/* Send Message Section */}
        <div className='lg:w-1/2 w-full'>
          <div className='p-8 bg-gray-800 rounded-xl shadow-xl'>
            <h2 className='text-3xl font-semibold text-white mb-6 text-center'>Send Me a Message</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
              <input
              data-aos="fade-right"
              data-aos-delay-100
                type='text'
                name='name'
                placeholder='Your Name'
                value={form.name}
                onChange={handleChange}
                className='p-4 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all'
                required
              />
              <input
              data-aos="fade-right"
              data-aos-delay-200
                type='email'
                name='email'
                placeholder='Your Email'
                value={form.email}
                onChange={handleChange}
                className='p-4 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all'
                required
              />
              <textarea
              data-aos="fade-right"
              data-aos-delay-300
                name='message'
                placeholder='Your Message'
                value={form.message}
                onChange={handleChange}
                className='p-4 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all h-40'
                required
              ></textarea>
              <button
              data-aos="fade-right"
              data-aos-delay-400
                type='submit'
                className='bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-md font-semibold transition-all hover:scale-105'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className='lg:w-1/2 w-full lg:mt-20'>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-4 gap-y-2'>
            {[
              
              { 
                href: `mailto:${email || "your@email.com"}`, 
                img: "https://img.icons8.com/3d-fluency/50/mail.png", 
                title: "Email Address", 
                detail: email
              },
              { href: `tel:+917995906671`, img: "https://img.icons8.com/color/144/apple-phone.png", title: "Phone", detail: "+91 7995906671" },
              { href: `https://wa.me/917995906671`, img: "https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/50/40C057/external-whatsapp-social-media-tanah-basah-basic-outline-tanah-basah.png", title: "WhatsApp", detail: "+91 7995906671" },
              { href: "https://www.linkedin.com/in/manti-lakshmi-narasimha/", img: "https://img.icons8.com/color/48/000000/linkedin.png", title: "LinkedIn", detail: "linkedin.com/in/manti-lakshmi-narasimha" },
              { href: "https://github.com/bf-1729", img: "https://img.icons8.com/glyph-neue/64/ffffff/github.png", title: "GitHub", detail: "github.com/bf-1729" }
            ].map((item, index) => (
              <div key={index} data-aos="fade-left" className='bg-gray-600 lg:w-64 hover:bg-gray-700 p-2 rounded-xl shadow-xl transition-all transform hover:scale-105'>
                <img className='w-12 h-12 mb-4' src={item.img} alt={item.title} />
                <h2 className='text-lg font-semibold text-white'>{item.title}</h2>
                <a href={item.href} target='_blank' rel='noopener noreferrer' className='text-cyan-400 hover:underline mt-2'>
                  {item.detail}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
