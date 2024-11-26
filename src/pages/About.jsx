import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const About = () => {
  const boxRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(boxRefs.current, {
        x: (index) => (index % 2 === 0 ? -100 : 100), // Alternate left/right animation
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div className="about-page bg-white text-blue-500 min-h-screen py-20 px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold uppercase">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Learn more about The Frontline Church, our mission, and how to find us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Box 1 */}
        <div
          ref={(el) => (boxRefs.current[0] = el)}
          className="box bg-white shadow-lg rounded-lg p-6 border border-gray-200"
        >
          <h2 className="text-xl font-bold mb-4">The Frontline Church</h2>
          <p className="text-gray-600">
            We are a community dedicated to evangelizing for the lost and transforming lives spiritually, mentally, and physically. Our church welcomes everyone to grow in faith and leadership.
          </p>
        </div>

        {/* Box 2 */}
        <div
          ref={(el) => (boxRefs.current[1] = el)}
          className="box bg-white shadow-lg rounded-lg p-6 border border-gray-200"
        >
          <h2 className="text-xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To bring total transformation to individuals by leading them to Christ and nurturing their potential to become leaders in their communities.
          </p>
        </div>

        {/* Box 3 */}
        <div
          ref={(el) => (boxRefs.current[2] = el)}
          className="box bg-white shadow-lg rounded-lg p-6 border border-gray-200"
        >
          <h2 className="text-xl font-bold mb-4">Find Us</h2>
          <p className="text-gray-600">
            Visit us at VXFM+4G8, Ohia-Rumuoke Nkpolu-, Otu Nda Street, Rumuigbo, Port Harcourt, or connect with us through our <Link to={'/contact'} className='contactLink text-blue-300'>contact page</Link> . We look forward to meeting you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
