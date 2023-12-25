import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <footer>
      <div>
        <FaGithub />
        <FaLinkedin />
        <IoMdMail />
      </div>
      <h3>2024, Wong Yuan Yi, Site Source on GitHub</h3>
    </footer>
  )
}

export default Footer;