import { FaLocationDot } from 'react-icons/fa6';

import profile1 from '../assets/profile1.png';

function Hero() {
  return (
    <section id="home" className="container h-max md:h-[39.5rem] grid grid-cols-8 items-center px-5 md:px-12 py-24 md:py-0">
      <div className="col-span-8 md:col-span-5 order-2 md:order-1 text-center md:text-start">
        <h1 className="opacity-0 text-[2rem] md:text-[2.75rem] bg-transparent animate-slideUpAnimation">
          Hey, I am Yuanyi 👋
        </h1>
        <div>
          <h1 className="leading-10">
            <span className="inline-block overflow-hidden whitespace-nowrap w-0 leading-normal bg-gradient-to-r from-[#FF0000] via-[#DF00A1] to-[#6100FF] text-transparent bg-clip-text animate-wipeRightAnimation1">
              Computer Science Student at
            </span>
          </h1>   
          <h1 className="leading-10">
            <span className="inline-block overflow-hidden whitespace-nowrap w-0 leading-normal bg-gradient-to-r from-[#FF0000] via-[#DF00A1] to-[#6100FF] text-transparent bg-clip-text animate-wipeRightAnimation2">
              Monash University Malaysia.
            </span>
          </h1>
        </div>
        <div className="flex items-center justify-center md:justify-start opacity-0 animate-fadeInAnimation">
          <FaLocationDot />
          <h3 className="text-[#404040]">&nbsp;&nbsp;Kuala Lumpur, Malaysia</h3>
        </div>
      </div>
      <img className="col-span-8 md:col-span-3 order-1 md:order-2 justify-self-center md:justify-self-end opacity-0 w-60 h-60 rounded-full object-cover drop-shadow animate-slideRightAnimation" src={ profile1 } alt="Profile 1" />
    </section>
  )
}

export default Hero;