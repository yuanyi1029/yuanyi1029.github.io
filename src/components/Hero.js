import { FaLocationDot } from "react-icons/fa6";

import profile1 from '../assets/profile1.png';

function Hero() {
  return (
    <section id="home" className="container h-max md:h-[39.5rem] grid grid-cols-8 items-center px-5 md:px-12 py-24 md:py-0">
      <div className="col-span-8 md:col-span-5 order-2 md:order-1 text-center md:text-start">
        <h1>
          Hey, I am Yuanyi.
          <span className="bg-gradient-to-r from-[#FF0000] via-[#DF00A1] to-[#6100FF] text-transparent bg-clip-text">
            &nbsp;Computer Science Student
            at Monash University Malaysia.
          </span>
        </h1>
        <div className="flex items-center justify-center md:justify-start">
          <FaLocationDot />
          <h3>&nbsp;&nbsp;Kuala Lumpur, Malaysia</h3>
        </div>
      </div>
      <img className="col-span-8 md:col-span-3 order-1 md:order-2 justify-self-center md:justify-self-end w-60 h-60 rounded-full object-cover drop-shadow" src={ profile1 } alt="Profile 1" />
    </section>
  )
}

export default Hero;