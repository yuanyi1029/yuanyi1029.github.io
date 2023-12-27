import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <footer className="container h-[10.75rem] flex justify-between items-center px-12">
      <div className="flex items-center gap-3">
        <a className="hover:text-[#404040]" href="https://github.com/yuanyi1029/" target="_blank">
          <FaGithub size="2em"/>
        </a>
        <a className="hover:text-[#404040] transition-all" href="https://www.linkedin.com/in/yuanyi1029/" target="_blank">
          <FaLinkedin size="2.2em"/>
        </a>
        <a className="hover:text-[#404040] transition-all" href="mailto:wyuanyi1029@gmail.com?subject=Sitename Mail!" target="_blank">
          <IoMdMail size="2.5em"/>
        </a>
      </div>
      <h3>2024  Wong Yuan Yi, Site Source on GitHub</h3>
    </footer>
  )
}

export default Footer;