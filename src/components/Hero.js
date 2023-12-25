import { FaLocationDot } from "react-icons/fa6";

import profile1 from '../assets/profile1.png';

function Hero() {
  return (
    <section>
      <div>
        <h1>
          Hey, I am Yuanyi. Computer Science 
          Student at Monash University Malaysia.
        </h1>
        < FaLocationDot />
        <h3>Kuala Lumpur, Malaysia</h3>
      </div>
      <img src={ profile1 } alt="Profile 1" />
    </section>
  )
}

export default Hero;