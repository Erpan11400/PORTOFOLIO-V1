import { FaInstagram, FaGithub, FaLinkedin, FaLine } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-32 py-5 flex md:flex-row flex-col md:gap-0 gap-6 justify-between items-center">
        <h1 className="text-3xl font-bold">PORTOFLIO</h1>
        <div className="flex gap-10">
            <a href="# ">Home</a>
            <a href="# ">About</a>
            <a href="# ">Project</a>
        </div>
        <div className="flex items-center gap-2">
            <a href="https://github.com/Erpan11400">
                <FaGithub size={30} />
            </a>
            <a href="www.linkedin.com/in/ervan-setyatama">
                <FaLinkedin size={30}/>
            </a>
            <a href="https://www.instagram.com/ervan_stytma/">
                <FaInstagram size={30}/>
            </a>
            <a href="https://line.me/ti/p/QOdcAl_DUm">
                <FaLine size={30}/>
            </a>
        </div>
    </div>
  )
}

export default Footer;