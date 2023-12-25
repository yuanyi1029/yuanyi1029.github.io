import profile2 from '../assets/profile2.jpg';

function About() {
  return (
    <section>
      <h1>A little bit about me</h1>
      <img src={ profile2 } alt="Profile 2" />
      <div>
        <h3>Interests</h3>
        <p>Web & Mobile Application Development, ML/AI</p>
      </div>
      <div>
        <h3>Education</h3>
        <p>Bachelor's of Computer Science @ Monash University Malaysia</p>
      </div>
      <div>
        <p>
          Hi there ~ My name is Wong Yuan Yi and I am a Computer Science 
          student at Monash University Malaysia. I am currently working as
          a Software Application Intern at Keysight Technologies where I 
          am working on an in-house manufacturing record system that allows
          Keysight product testers to report test findings.
        </p>
      </div>
    </section>
  )
}

export default About;