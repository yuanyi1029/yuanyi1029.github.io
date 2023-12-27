import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <nav className="container h-[6.25rem] flex justify-between items-center px-12">
        <h2>Site name</h2>
        <ul className="flex">
          <li className="pl-11"><Link smooth to="#home">Home</Link></li>
          <li className="pl-11"><Link smooth to="#about">About</Link></li>
          <li className="pl-11"><Link smooth to="#experience">Experience</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar;