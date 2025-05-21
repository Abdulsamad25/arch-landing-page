import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Indoor from "../assets/Img/Indoor.jpg";
import Wooden from "../assets/Img/wooden.jpg";
import emailjs from "@emailjs/browser";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    emailjs
      .sendForm(
        "service_0v1ffud",
        "template_26msbrp",
        form.current,
        "XG-tw72Kf5qtU2Z3g"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setLoading(false);
          setSuccess(false);
        }
      );
  };

  return (
    <div
      className="flex md:flex-row flex-col w-full min-h-screen"
    id="contact">
      <div
        className="flex flex-col flex-1 justify-center items-center p-8 h-full min-h-[103.5vh]"
        style={{
          backgroundImage: `url(${Indoor})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-6 rounded-lg w-full max-w-lg h-[92.5vh]">
          <h1 className="mt-4 mb-2 font-semibold text-blue-300 text-2xl md:text-4xl text-center">
            Contact Us
          </h1>
          <h3 className="mb-0 font-semibold text-blue-300 md:text-sm text-lg sm:text-lg text-center break-all">
            Contact@Cynosure.netlify.app
          </h3>
          <p className="mb-4 text-blue-300 sm:text-sm md:text-sm text-base text-center">
            09137286441
          </p>

          <div className="flex flex-col justify-center items-center gap-4 mt-40">
            <Link to="/welcome">
              <button className="bg-gray-700 px-5 py-3 w-full h-full text-white transition cursor-pointer">
                Welcome
              </button>
            </Link>
            <Link to="/about-us">
              <button className="bg-gray-700 px-5 py-3 w-full h-full text-white transition cursor-pointer">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col flex-1 justify-center items-center p-8 h-screen min-h-[103.5vh]"
        style={{
          backgroundImage: `url(${Wooden})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-6 rounded-lg w-full max-w-lg">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block font-medium text-gray-100 text-sm">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                required
                className="block shadow-sm mt-1 px-4 py-2 border border-gray-100 focus:border-black rounded-md outline-none focus:ring-black w-full"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-100 text-sm">
                Email
              </label>
              <input
                type="email"
                name="from_email"
                required
                className="block shadow-sm mt-1 px-4 py-2 border border-gray-100 focus:border-black rounded-md outline-none focus:ring-black w-full"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-100 text-sm">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                className="block shadow-sm mt-1 px-4 py-2 border border-gray-100 focus:border-black rounded-md outline-none focus:ring-black w-full"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-100 text-sm">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="block shadow-sm mt-1 px-4 py-2 border border-gray-100 focus:border-black rounded-md outline-none focus:ring-black w-full resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-black hover:bg-gray-800 py-2 rounded-md w-full font-medium text-white transition cursor-pointer"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {success === true && (
            <p className="mt-4 text-green-600 text-center">
              Message sent successfully!
            </p>
          )}
          {success === false && (
            <p className="mt-4 text-red-600 text-center">
              Something went wrong. Try again.
            </p>
          )}
          <div className="flex justify-center items-center gap-4 mt-8">
            <a
              href="https://instagram.com/abdulsamad.yyy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-pink-500 hover:text-pink-700 text-2xl md:text-3xl transition" />
            </a>
            <a
              href="https://wa.me/+2349094472087"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-green-500 hover:text-green-700 text-2xl md:text-3xl transition" />
            </a>
            <a
              href="https://facebook.com/Abdulsamad.yy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-blue-600 hover:text-blue-800 text-2xl md:text-3xl transition" />
            </a>
            <a
              href="https://twitter.com/yahaya_samad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-blue-400 hover:text-blue-600 text-2xl md:text-3xl transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/yahaya-abdulsamad-051b1b306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-700 hover:text-blue-900 text-2xl md:text-3xl transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

