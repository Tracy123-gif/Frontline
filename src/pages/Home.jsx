import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/navbar';
import image from '../assets/images/worship.jpeg';
import MapSection from '../components/MapSection';

gsap.registerPlugin(ScrollTrigger);

const Home = () =>  {
  // Refs for each section to trigger animations
  const heroRef = useRef(null);
  const previewRef = useRef(null);
  const mapRef = useRef(null);
  const eventsRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Define the fade in and out animations for each section
    const sections = [
      { ref: heroRef, from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1 } },
      { ref: previewRef, from: { x: 100, opacity: 0 }, to: { x: 0, opacity: 1 } },
      { ref: mapRef, from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1 } },
      { ref: eventsRef, from: { x: 100, opacity: 0 }, to: { x: 0, opacity: 1 } },
      { ref: contactRef, from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1 } },
      { ref: footerRef, from: { x: 100, opacity: 0 }, to: { x: 0, opacity: 1 } },
    ];

    sections.forEach((section) => {
      gsap.fromTo(
        section.ref.current,
        section.from,
        {
          ...section.to,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section.ref.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse', // Repeats the animation in both directions
          },
        }
      );
    });
  }, []);

  return (
    <div className='overflow-x-hidden z-10'>
      {/* hero section */}
      <div ref={heroRef} className='hero relative w-screen '>
        <div className="container">
          <img src={image} alt="" className='absolute object-cover h-full w-full top-0 left-0 -z-10' />
        </div>
        <div className="textContent relative -top-11 flex flex-col justify-center items-center h-full gap-10">
          <h1 className='text-6xl font-bold text-white opacity-85 text-center max-sm:text-5xl '>The Frontline Church</h1>
          <p className='w-1/2 mx-auto text-center text-white max-sm:text-base '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum perspiciatis autem aperiam harum aspernatur a placeat sint, nesciunt et quidem at amet quisquam deserunt sunt recusandae dicta, porro enim?
          </p>
        </div>
      </div>

      {/* preview section */}
      <div ref={previewRef} className='preview p-20 mb-24 flex flex-col m-auto text-center justify-center item-center gap-5'>
        <h1 className='text-4xl uppercase font-medium'>Join Us for Service</h1>
        <p>Sundays - 8:30am & 10:00am</p>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates error quia eos sunt mollitia, praesentium vero voluptatem dolore</p>
          <p>laudantium. Tempora aliquam commodi debitis nam quod animi quis!</p>
        </div>
      </div>

      {/* map section */}
      <div ref={mapRef} className='mapContainer'>
        <MapSection />
      </div>

      {/* events section */}
      <div ref={eventsRef} className='events m-32 my-52 flex max:flex-wrap gap-8 p-8 sm:mx-3 max-sm:flex-col max-sm:w-screen justify-center items-center mx-auto'>
        <div className="event shadow-lg bg-slate-100 p-11 rounded-md max-sm:w-full">
          <p className="eventPreview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, cumque accusantium suscipit vero minus architecto voluptatem ut tempore consequatur possimus!
          </p>
          <button className='eventCta bg-blue-500 px-10 py-4 rounded-full mt-10 shadow-xl drop-shadow-2xl border-black border-2 border-opacity-50 transition-all duration-100 hover:bg-blue-700'>Past Events</button>
        </div>
        <div className="event shadow-lg bg-slate-100 p-11 rounded-md max-sm:w-full">
          <p className="eventPreview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, cumque accusantium suscipit vero minus architecto voluptatem ut tempore consequatur possimus!
          </p>
          <button className='eventCta text-white bg-blue-500 px-10 py-4 rounded-full mt-10 drop-shadow-2xl shadow-2xl border-black border-2 border-opacity-50'>Future Events</button>
        </div>
      </div>

      {/* contact section */}
      <div ref={contactRef} className="h-96 w-screen mb-20 p-20 max-sm:py-20 max-sm:px-0">
        <div className="content flex flex-col items-center bg-slate-100 over">
          <h1 className='heading font-bold text-3xl text-center my-20 pt-9'>Send Us A Message</h1>
          <p className='text-center font-medium w-4/5 mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quia, temporibus facere assumenda, id qui quasi nam accusamus perspiciatis dolore illo obcaecati magnam consequatur sed non consequuntur fugit repudiandae alias.
          </p>
          <button className='mb-10 bg-blue-500 px-10 py-4 rounded-full mt-10 drop-shadow-2xl shadow-2xl border-black border-2 border-opacity-50'>Contact Us</button>
        </div>
      </div>

      {/* footer section */}
      <div ref={footerRef} className='footer mt-72 bg-blue-500 h-96 w-screen py-14 px-16 text-white mb-0'>
        <div className="footentContent flex justify-center gap-10 md:flex-wrap">
          <div className="left">
            <h1 className="heading text-3xl uppercase">The Frontline Church</h1>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, blanditiis?</p>
          </div>
          <div className="right cta flex gap-10">
            <button className='py-4 px-8 rounded-full bg-white text-black border-2 shadow-lg drop-shadow-2xl'>Contact Us</button>
            <button className='py-4 px-8 rounded-full bg-white text-black border-2 shadow-lg drop-shadow-2xl'>Learn More</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
