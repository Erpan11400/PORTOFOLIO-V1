import { FaGithub, FaLinkedin, FaLine } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md"
import { navbarMenu } from '../data/data'

const Footer = () => {
  return (
    <div className="mt-32 py-5 flex md:flex-row flex-col md:gap-0 gap-6 justify-between items-center">
        <h1 className="text-3xl font-bold">PORTOFLIO</h1>
        <div className="flex gap-10">
            {
                navbarMenu.slice(0,3).map((items) => {
                    return <a href={items.link}>{items.title}</a>
                })
            }
        </div>
        <div className="flex items-center gap-2">
            <a href="https://mailto:ervan.gkbi@gmail.com">
                <MdOutlineMail size={33} />
            </a>
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