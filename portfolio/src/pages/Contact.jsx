import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const email = "mlakshminarasimha95@gmail.com";
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
      to_name: "Manti Lakshmi Narasimha",
      reply_to: form.email,
      message: `From: ${form.email}\n\n${form.message}`,
    };
    
    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      },
      (error) => {
        alert("Something went wrong. Please try again.");
      }
    );
  };

  return (
    <div id='contact' className='lg:w-4/5 w-full mx-auto py-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl backdrop-blur-lg p-10'>
      <div className='text-center mb-12'>
        <h1 className='font-bold text-5xl text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text'>Get In Touch</h1>
        <p className='text-gray-400 mt-3 text-lg'>Let's work together! Contact me for any queries or collaborations.</p>
      </div>
      
      <div className='flex lg:flex-row flex-col gap-12'>
        <div data-aos="fade-right" className='lg:w-1/2 w-full bg-gray-700 bg-opacity-50 p-8 rounded-xl shadow-xl'>
          <h2 className='text-2xl font-semibold text-white mb-6 text-center'>Drop Me a Message</h2>
          <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              value={form.name}
              onChange={handleChange}
              className='p-4 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-md'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              value={form.email}
              onChange={handleChange}
              className='p-4 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-md'
              required
            />
            <textarea
              name='message'
              placeholder='Your Message'
              value={form.message}
              onChange={handleChange}
              className='p-4 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all h-40 shadow-md'
              required
            ></textarea>
            <button
              type='submit'
              className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg'
            >
              Send Message
            </button>
          </form>
        </div>

        <div className='lg:w-1/2 w-full flex flex-col gap-4'>
          {[
            { href: `mailto:${email}`, img: "https://img.icons8.com/3d-fluency/50/mail.png", title: "Email", detail: email },
            { href: `tel:+917995906671`, img: "https://img.icons8.com/color/144/apple-phone.png", title: "Phone", detail: "+91 7995906671" },
            { href: `https://wa.me/917995906671`, img: "https://img.icons8.com/color/48/whatsapp.png", title: "WhatsApp", detail: "+91 7995906671" },
            { href: "https://www.linkedin.com/in/manti-lakshmi-narasimha/", img: "https://img.icons8.com/color/48/linkedin.png", title: "LinkedIn", detail: "linkedin.com/in/manti-lakshmi-narasimha" },
            { href: "https://github.com/bf-1729", img: "https://img.icons8.com/glyph-neue/64/github.png", title: "GitHub", detail: "github.com/bf-1729" }
          ].map((item, index) => (
            <div key={index} data-aos="fade-left" className='bg-gray-800 p-4 rounded-xl flex items-center gap-4 shadow-lg transition-transform hover:scale-105'>
              <img className='w-12 h-12' src={item.img} alt={item.title} />
              <div>
                <h2 className='text-white font-semibold'>{item.title}</h2>
                <a href={item.href} target='_blank' rel='noopener noreferrer' className='text-cyan-400 hover:underline'>{item.detail}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;