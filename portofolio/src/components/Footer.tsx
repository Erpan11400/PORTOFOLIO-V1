import { FaGithub, FaLinkedin, FaLine } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="mt-32 py-5 flex md:flex-row flex-col md:gap-0 gap-6 justify-between items-center">
        <a href="mailto:ervan.setyatama@binus.ac.id" className="p-3 md:p-0 bg-zinc-500 md:bg-transparent rounded-xl hover:underline">ervan.setyatama@binus.ac.id</a>
        <p>&copy; 2025 Ervan Setyatama</p>
        <div className="flex items-center gap-2">
            <a href="https://github.com/Erpan11400">
                <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/ervan-setyatama">
                <FaLinkedin size={30}/>
            </a>
            <a href="https://line.me/ti/p/QOdcAl_DUm">
                <FaLine size={30}/>
            </a>
        </div>
    </div>
  )
}

export default Footer;