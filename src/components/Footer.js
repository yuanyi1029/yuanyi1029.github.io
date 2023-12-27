import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <footer className="container h-max md:h-[10.75rem] flex flex-col md:flex-row justify-between items-center px-5 md:px-12 py-8 md:py-0">
      <div className="flex items-center order-2 md:order-1 gap-3">
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
      <h3 className="order-1 md:order-2">2024  Wong Yuan Yi, Site Source on GitHub</h3>
    </footer>
  )
}

export default Footer;