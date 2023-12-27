import monash from '../assets/monash.png';
import keysight from '../assets/keysight.png';
import mumtec from '../assets/mumtec.png';

function Experience() {
  return (
    <section id="experience" className="container h-[28.25rem] flex flex-col justify-center px-12 border-t-2 border-[#404040]">
      <h1 className="text-center mb-5">Several places I am lucky to be apart of</h1>
      <div className="grid grid-cols-3 gap-5">
        <article id="card" className="col-span-1 flex flex-col justify-between p-5 rounded-2xl drop-shadow">
          <div className="flex flex-col items-center text-center mb-3">
            <img className="mb-3 w-32 h-32 rounded-full object-cover drop-shadow" src={ monash } alt="Monash University Logo" />
            <h3>Monash University Malaysia School of IT</h3>
          </div>
          <div className="flex flex-col text-center">
            <p>2023</p>
            <p>Events Officer</p>
          </div>
        </article>
        <article id="card" className="col-span-1 flex flex-col justify-between p-5 rounded-2xl drop-shadow">
          <div className="flex flex-col items-center text-center mb-3">
            <img className="mb-3 w-32 h-32 rounded-full object-cover drop-shadow" src={ keysight } alt="Keysight Technologies Logo" />
            <h3>Keysight Technologies</h3>
          </div>
          <div className="flex flex-col text-center">
            <p>2023</p>
            <p>Software Application Intern</p>
          </div>
        </article>
        <article id="card" className="col-span-1 flex flex-col justify-between p-5 rounded-2xl drop-shadow">
          <div className="flex flex-col items-center text-center mb-3">
            <img className="mb-3 w-32 h-32 rounded-full object-cover drop-shadow" src={ mumtec } alt="Monash University Tech Club Logo" />
            <h3>Monash University Malaysia Tech Club</h3>
          </div>
          <div className="flex flex-col text-center">
            <p>2024</p>
            <p>Secretary</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Experience;