import profile2 from '../assets/profile2.jpg';

function About() {
  return (
    <section id="about" className="container h-max md:h-[34.375rem] flex flex-col justify-center px-5 md:px-12 py-8 md:py-0 border-t-2 border-[#404040]">
      <h1 className="text-center mb-5">A little bit about me</h1>
      <div className="flex flex-col md:grid md:grid-cols-10 grid-rows-2 gap-5 px-12 md:px-0">
        <img className="col-span-4 row-span-full md:w-full md:h-full rounded-2xl object-cover drop-shadow" src={ profile2 } alt="Profile 2" />
        <div className="col-span-3 row-span-1 flex flex-col justify-center text-center p-5 border-2 border-black rounded-2xl drop-shadow">
          <h1>🎨</h1>
          <h3>Interests</h3>
          <p>Web & Mobile Application Development, ML/AI</p>
        </div>
        <div className="col-span-3 row-span-1 flex flex-col justify-center text-center p-5 border-2 border-black rounded-2xl drop-shadow">
          <h1>📖</h1>
          <h3>Education</h3>
          <p>Bachelor's of Computer Science @ Monash University Malaysia</p>
        </div>
        <div className="col-span-6 row-span-2 text-center p-5 border-2 border-black rounded-2xl drop-shadow">
          <p>
            Hi there ~ My name is <b>Wong Yuan Yi</b> and I am a Computer 
            Science student at Monash University Malaysia. I am currently 
            working asa <b>Software Application Intern</b> at <b>Keysight 
            Technologies</b> where I am working on an in-house manufacturing
            record system that allows Keysight product testers to report 
            test findings.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;

// import profile2 from '../assets/profile2.jpg';

// function About() {
//   return (
//     <section id="about" className="container h-max md:h-[34.375rem] flex flex-col justify-center px-12 border-t-2 border-[#404040]">
//       <h1 className="text-center mb-5">A little bit about me</h1>
//       <div className="grid grid-cols-2 md:grid-cols-10 grid-rows-3 md:grid-rows-2 gap-5">
//         <img className="col-span-full md:col-span-4 row-span-1 md:row-span-full md:w-full md:h-full rounded-2xl object-cover drop-shadow" src={ profile2 } alt="Profile 2" />
//         <div className="col-span-1 md:col-span-3 row-span-2 md:row-span-1 flex flex-col justify-center text-center p-0 md:p-5 border-2 border-black rounded-2xl drop-shadow">
//           <h1>🎨</h1>
//           <h3>Interests</h3>
//           <p>Web & Mobile Application Development, ML/AI</p>
//         </div>
//         <div className="col-span-2 md:col-span-3 row-span-2 md:row-span-1 flex flex-col justify-center text-center p-5 border-2 border-black rounded-2xl drop-shadow">
//           <h1>📖</h1>
//           <h3>Education</h3>
//           <p>Bachelor's of Computer Science @ Monash University Malaysia</p>
//         </div>
//         <div className="col-span-full md:col-span-6 row-span-3 md:row-span-2 text-center p-5 border-2 border-black rounded-2xl drop-shadow">
//           <p>
//             Hi there ~ My name is <b>Wong Yuan Yi</b> and I am a Computer 
//             Science student at Monash University Malaysia. I am currently 
//             working asa <b>Software Application Intern</b> at <b>Keysight 
//             Technologies</b> where I am working on an in-house manufacturing
//             record system that allows Keysight product testers to report 
//             test findings.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About;