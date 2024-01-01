import Reveal from './Reveal';

import monash from '../assets/monash.png';
import keysight from '../assets/keysight.png';
import mumtec from '../assets/mumtec.png';

const experiences = [
  {
    name: "Monash University Malaysia School Of IT",
    image: monash,
    alt: "Monash University Logo",
    year: "2023", 
    position: "Events Officer"
  },
  {
    name: "Keysight Technologies",
    image: keysight,
    alt: "Keysight Technologies Logo",
    year: "2023", 
    position: "Software Application Intern"
  },
  {
    name: "Monash University Malaysia Tech Club",
    image: mumtec,
    alt: "Monash University Tech Club Logo",
    year: "2024", 
    position: "Secretary"
  }
]

function Experience() {
  return (
    <section id="experience" className="container h-max md:h-[28.25rem] flex flex-col justify-center px-5 md:px-12 py-8 md:py-0 border-t-2 border-[#404040]">
      <Reveal>
        <h1 className="text-center mb-5">Several places I am lucky to be apart of</h1>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-5 px-12 md:px-0">
          {
            experiences.map(experience => {
              return (
                <article id="card" className="col-span-1 flex flex-col justify-between p-5 rounded-2xl drop-shadow" key={ experience.name }>
                  <div className="flex flex-col items-center text-center mb-3">
                    <img className="mb-3 w-32 h-32 rounded-full object-cover drop-shadow" src={ experience.image } alt={ experience.alt } />
                    <h3>{ experience.name }</h3>
                  </div>
                  <div className="flex flex-col text-center">
                    <p>{ experience.year }</p>
                    <p>{ experience.position }</p>
                  </div>
                </article>
              )
            })
          }
        </div>
      </Reveal>
    </section>
  )
}

export default Experience;