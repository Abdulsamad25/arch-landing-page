import React, {useEffect} from "react";
import JohnDoe from "../assets/Img/John Doe.jpg";
import BG from "../assets/Img/Bg.jpg";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const AboutUs = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  return (
    <div className="flex flex-col justify-center items-center p-6 md:p-10 w-full h-auto md:h-full">
      <div className="flex md:flex-row flex-col justify-center items-stretch gap-0 bg-gray-200 mt-20 p-0 w-full">
        {/* Text Section */}
        <div className="flex flex-col flex-1 justify-center p-6 md:p-16">
          <h1 className="mb-4 px-2 rounded w-fit font-semibold text-3xl md:text-5xl">
            Hello
          </h1>
          <p className="mb-6 px-2 rounded w-fit text-gray-700 md:text-m text-base">
            Designing your dream home should be exhilarating, not exhausting. At
            Cynosure, we transform the overwhelming into the
            extraordinary—turning your vision into a home that reflects your
            style, your lifestyle, and your story. Nestled in the heart of
            Kalamazoo County, Michigan, our team specializes in architectural
            design that goes beyond blueprints—we create living spaces that feel
            like you.
          </p>
          <h1 className="mb-6 px-2 rounded w-fit font-extrabold text-2xl md:text-3xl">
            Why choose Cynosure?
          </h1>
          <div className="space-y-6">
            <div>
              <h2 className="mb-1 font-semibold text-xl md:text-xl">
                ~ Tailored to you:
              </h2>
              <p className="text-gray-700 md:text-m text-base">
                Whether you're drawn to sleek modern farmhouse charm, timeless
                craftsman details, or a bold contemporary aesthetic, we'll
                refine your ideas into a cohesive design that harmonizes with
                your land, life, and aspirations.
              </p>
            </div>
            <div>
              <h2 className="mb-1 font-semibold text-xl md:text-xl">
                ~ End-to-End Expertise:
              </h2>
              <p className="text-gray-700 md:text-m text-base">
                From full-site planning that maximizes your property's potential
                to selecting the perfect fixtures for your kitchen sink, we
                guide you through every decision—no detail overlooked.
              </p>
            </div>
            <div>
              <h2 className="mb-1 font-semibold text-xl md:text-xl">
                ~ Future-Proof Design:
              </h2>
              <p className="text-gray-700 md:text-m text-base">
                Your home should evolve with you. We engineer spaces that adapt
                to your needs, whether it's a sunlit reading nook, a chef's
                kitchen for gatherings, or a future-proof layout for growing
                families.
              </p>
            </div>
            <div>
              <h2 className="mb-1 font-semibold text-xl md:text-xl">
                ~ A Legacy of Craftsmanship:
              </h2>
              <p className="text-gray-700 md:text-m text-base">
                Imagine walking through your front door and feeling it—the quiet
                pride of a home crafted exclusively for you.
              </p>
            </div>
            <div>
              <p className="text-gray-700 md:text-m text-base">
                At Cynosure, collaboration is key. We listen deeply, innovate
                relentlessly, and deliver designs that blend beauty with
                functionality. Our process is:
              </p>
              <ul className="space-y-1 mt-2 ml-4 text-gray-700 text-base md:text-lg list-disc list-inside">
                <li>
                  <span className="font-semibold">Dream:</span> Share your
                  inspiration, goals, and even your Pinterest board—we'll refine
                  your vision.
                </li>
                <li>
                  <span className="font-semibold">Design:</span> Our team will
                  create a custom plan that reflects your style and needs.
                </li>
                <li>
                  <span className="font-semibold">Delight:</span> Watch your
                  dream take shape, with transparent communication at every
                  step.
                </li>
              </ul>
            </div>
            <div>
              <h1 className="mt-8 mb-2 font-semibold text-2xl md:text-2xl">
                Your Legacy Starts Here
              </h1>
              <p className="text-gray-700 md:text-m text-base">
                Don't settle for a house when you can have a home—a space where
                memories unfold and generations thrive. Let us shoulder the
                complexity while you savor the journey.
              </p>
            </div>
            <div>
              <h1 className="mt-8 mb-2 font-semibold text-2xl md:text-2xl">
                Ready to Begin?
              </h1>
              <p className="text-gray-700 md:text-m text-base">
                Contact Cynosure today for a free consultation. Together, we'll
                turn "what if" into "wow."
              </p>
              <p className="mt-2 font-semibold md:text-m text-base">
                Your dream home isn't just possible—it's inevitable!
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-pink-500 hover:text-pink-700 text-2xl" />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-500 hover:text-green-700 text-2xl" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-blue-600 hover:text-blue-800 text-2xl" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-blue-400 hover:text-blue-600 text-2xl" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-700 hover:text-blue-900 text-2xl" />
            </a>
          </div>
        </div>
        {/* Image Section */}
        <div className="relative flex-1 min-h-[350px] md:min-h-[600px]">
          <img
            src={BG}
            alt="About Us"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-stretch bg-white shadow-lg mt-16 rounded-lg w-full overflow-hidden">
        {/* Owner Image */}
        <div className="relative flex-1 min-h-[350px] md:min-h-[500px]">
          <img
            src={JohnDoe}
            alt="John Doe"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* Owner Text */}
        <div className="flex flex-col flex-1 justify-center p-8">
          <h2 className="mb-4 font-bold text-3xl md:text-4xl">
            My Story
          </h2>
          <p className="mb-4 text-gray-700 md:text-m text-base">
            For over 35 years, I've lived and breathed residential home design -
            not just as a career, but as lifelong passion. My journey began as a
            teenager working alongside master tradesmen at a construction
            company, where I soaked up the artistry of framing, trimming, and
            perfecting homes while balancing school. Those early days taught me
            more than skills; they instilled a profound respect for
            craftsmanship and the joy of turning a family's visions into
            reality.
          </p>
          <p className="mb-4 text-gray-700 md:text-m text-base">
            What started with a hammer and nails evolved into a obsession with
            how homes come together. I studied every phase of construction, from
            foundation to finish, and discovered my true calling: design. This
            led me to pursue architecture, where I honed my ability to blend
            technical precision with creative vision. Today, as the founder of
            Gage Home Designs, I channel decades of hands-on experience into
            creating homes that are functional as they are breathtaking.
          </p>
          <h2 className="mt-8 mb-2 font-bold text-2xl md:text-3xl">
            Why work with me?
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg md:text-xl">
                ~ Unmatched Expertise:
              </h3>
              <p className="text-gray-700 md:text-m text-base">
                My dual background in construction and design ensures your home
                is beautiful and buildable, avoiding costly surprises.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg md:text-xl">
                ~ Relentless Attention to Detail:
              </h3>
              <p className="text-gray-700 md:text-m text-base">
                From optimizing sightlines to selecting materials that age
                gracefully, I sweat the small stuff so you don't have to.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg md:text-xl">
                ~ Your Vision, My Mission:
              </h3>
              <p className="text-gray-700 md:text-m text-base">
                There's no greater reward than seeing a client's eyes light up
                when their dream home takes shape—on paper, then in person.
              </p>
            </div>
            <div>
              <p className="mt-4 text-gray-700 md:text-m text-base">
                Let's build more than a house!
                <br />
                Let's create a legacy!
              </p>
              <p className="mt-4 text-gray-700 md:text-m text-base">
                Your dream home deserves a designer who cares as deeply as you
                do.
              </p>
              <p className="mt-4 text-gray-700 md:text-m text-base">
                Contact me today!
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gray-900 hover:bg-gray-800 mt-2 px-6 py-2 rounded text-white transition"
              >
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-gray-200 shadow-lg mx-auto mt-16 p-8 rounded-lg w-full max-w-2xl">
        <h2 className="mb-4 font-bold md:text-2xl text-3xl">
          Contact
        </h2>
        <p className="mb-4 text-m md:text-m text-center">
          We are always looking for new and exciting opportunities. Let's
          connect.
        </p>
        <div className="mb-2">
          <a
            href="mailto:your@email.com"
            className="text-m md:text-m underline"
          >
           samadolalekan15@gmail.com
          </a>
        </div>
        <div>
          <a
            href="tel:1234567890"
            className="text-m md:text-m"
          >
            09094472087
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
