import { RiGithubFill, RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

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
            <a href="#">
                <RiGithubFill size={30} />
            </a>
            <a href="#">
                <RiInstagramFill size={30}/>
            </a>
            <a href="#">
                <RiWhatsappFill size={30}/>
            </a>
        </div>
    </div>
  )
}

export default Footer;