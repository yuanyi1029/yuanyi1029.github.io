import monash from '../assets/monash.png';
import keysight from '../assets/keysight.png';
import mumtec from '../assets/mumtec.png';

function Experience() {
  return (
    <section>
      <h1>Several place I am lucky to be apart of</h1>
      <article>
        <img src={ monash } alt="Monash University Logo" />
        <h3>Monash University Malaysia School of IT</h3>
        <p>2023</p>
        <p>Events Officer</p>
      </article>
      <article>
        <img src={ keysight } alt="Keysight Technologies Logo" />
        <h3>Keysight Technologies</h3>
        <p>2023</p>
        <p>Software Application Intern</p>
      </article>
      <article>
        <img src={ mumtec } alt="Monash University Tech Club Logo" />
        <h3>Monash University Malaysia Tech Club</h3>
        <p>2024</p>
        <p>Secretary</p>
      </article>
    </section>
  )
}

export default Experience;