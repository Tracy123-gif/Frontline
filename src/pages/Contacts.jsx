import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="contact-page bg-blue-500 text-white min-h-screen py-16 px-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold uppercase">Contact Us</h1>
        <p className="mt-4 text-lg opacity-90">
          We’d love to hear from you! Feel free to reach out with your questions or prayer requests.
        </p>
      </div>

      {/* Contact Info */}
      <div className="max-w-7xl mx-auto flex max-md:flex-wrap justify-between items-start gap-12">
        {/* Mailto Section */}
        <div className="mailto w-full sm:w-1/2 bg-white text-blue-500 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <p className="mb-6">
            You can email us directly by clicking the button below. We’ll get back to you as soon as possible!
          </p>
          <a
            href="mailto:th1044225@gnail.com?subject=CGMI frontline church message&body=Write your message here..."
            className="w-full inline-block bg-blue-500 text-white py-3 rounded-lg text-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Email Us
          </a>
        </div>

        {/* Contact Info */}
        <div className="info w-full md:w-1/2 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Get In Touch</h2>
            <p className="opacity-90">
              Visit us at our location or connect with us via phone or email. We’re here for you.
            </p>
          </div>
          <div className="space-y-4">
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-4 text-2xl" />
              <span>VXFM+4G8, Ohia-Rumuoke Nkpolu-, Otu Nda Street, Rumuigbo, Port Harcourt</span>
            </p>
            <p className="flex items-center">
              <FaPhoneAlt className="mr-4 text-2xl" />
              <span>+2347053238516</span>
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-4 text-2xl" />
              <span><a href="">frontlineChurch@gmail.com</a></span>
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white text-blue-500 rounded-full flex items-center justify-center hover:bg-gray-200"
              >
               <a href="https://www.facebook.com/CGMiNkpoluRumuigbo?mibextid=ZbWKwL"> <FaFacebookF /></a>
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
