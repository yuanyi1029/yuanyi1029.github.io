import { FaLocationDot } from "react-icons/fa6";

import profile1 from '../assets/profile1.png';

function Hero() {
  return (
    <section id="home" className="container h-[48.375rem] grid grid-cols-8 items-center px-12">
      <div className="col-span-5 justify-self-start">
        <h1>
          Hey, I am Yuanyi.
          <span className="bg-gradient-to-r from-[#FF0000] via-[#DF00A1] to-[#6100FF] text-transparent bg-clip-text">
            &nbsp;Computer Science Student
            at Monash University Malaysia.
          </span>
        </h1>
        <div className="flex items-center">
          <FaLocationDot />
          <h3>&nbsp;&nbsp;Kuala Lumpur, Malaysia</h3>
        </div>
      </div>
      <img className="col-span-3 justify-self-end w-60 h-60 rounded-full object-cover drop-shadow" src={ profile1 } alt="Profile 1" />
    </section>
  )
}

export default Hero;