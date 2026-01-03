import { Image, listTools, listProyek, experience } from "./data/data"
import { IoMdDownload, IoMdEye } from "react-icons/io"

export const LandingPage = () => {
    return (
        <>
            {/* Home Session or Hero Session */}
            <div id="Hero" className="Hero lg:h-150 grid grid-cols-1 lg:grid-cols-2 xl:gap-0 gap-4 items-center scroll-mt-24 mt-3">
                <div className="flex justify-center my-5 lg:hidden animate__animated animate__fadeInUp animate__delay-1s">
                    <img src={Image.HeroImage} alt="Ervan Setyatama" className="w-[500px] rounded-b-full" />
                </div>
                <div className="text-center lg:text-left animate__animated animate__fadeInUp animate__delay-1s">
                    <div className="flex justify-center lg:justify-start">
                        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
                            <img src={Image.HeroImage} alt="Ervan Setyatama" className="w-10 rounded-md lg:block hidden" />
                            <p>" You can, cause you're familiar with that !! "</p>
                        </div>
                    </div>
                    <h1 className="text-5xl/tight">Hi 🙌🏻 I'm Ervan Setyatama</h1>
                    <br />
                    <h3 className="text-xl">Undergraduate Computer Science | Software Engineering</h3>
                    <div className="mt-10 flex items-center justify-center lg:justify-start sm:gap-4 gap-2">
                        <a href="/CV.pdf" className="flex items-center gap-1 bg-violet-700 p-4 rounded-2xl hover:bg-violet-500" download="CV Ervan Setyatama">Download CV <IoMdDownload size={25} /></a>
                        <a href="#Project" className="flex items-center gap-1 bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500">View Project <IoMdEye size={25} /> </a>
                    </div>
                </div>
                <div className="my-5 lg:block hidden animate__animated animate__fadeInUp animate__delay-2s">
                    <img src={Image.HeroImage} alt="Ervan Setyatama" className="w-[500px] lg:ml-auto rounded-b-full" />
                </div>
            </div>
            {/* Home Session or Hero Session */}

            {/* About Session */}
            <h1 id="About" className="mt-32 mb-10 text-4xl text-center font-bold underline scroll-mt-24">About Me</h1>
            <div className="About grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-3" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <div className="About-1 grid bg-zinc-800 w-full p-7 rounded-lg">
                    <p className="text-base/loose text-justify opacity-60">During high school, I constantly wondered what websites and apps were, why they were so widely used, and how they worked. From there, I wanted to understand the processes behind them.</p>
                    <p className="text-base/loose text-justify mt-5 opacity-60">I'm currently a Bachelor's degree ( <span className="text-yellow-300">S1</span> ) student in <span className="text-blue-300 italic">Computer Science</span>  at BINUS University, graduating in 2027, majoring in Software Engineering. I am interested in designing and developing web and app projects. I continually strive to gain knowledge about these topics so I can contribute to real-world projects and the community.</p>
                    <div className="flex items-center justify-center mt-5">
                        <div className="flex items-center gap-6">
                            <div>
                                <h1 className="text-4xl mb-1">
                                    3<span className="text-violet-500">+</span>
                                </h1>
                                <p>Proyek Selesai</p>
                            </div>
                            <div>
                                <h1 className="text-4xl mb-1">
                                    2<span className="text-violet-500 text-lg">year</span>
                                </h1>
                                <p>Pengalaman</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="About-2 bg-zinc-800 w-full p-7 rounded-lg">
                    <h1 className="mb-5 text-2xl text-center font-bold uppercase">EXPERIENCE</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {
                            experience.map((exp) => {
                                return <div key={exp.id} className="p-4 bg-zinc-700">
                                    <div>
                                        <p className="text-zinc-400">{exp.start} - {exp.end}</p>
                                        <h3 className="text-xl font-bold">{exp.job}</h3>
                                        <p className="text-zinc-300">{exp.company}</p>
                                        <p className="text-zinc-400">{exp.at}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div >
            {/* About Session */}

            {/* Show up Tools */}
            <div className="Tools mt-32">
                <h1 className="text-4xl font-bold mb-4 text-center underline">Tools</h1>
                <p className="opacity-60 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Berikut adalah tools yang biasa saya gunakan saat coding</p>
                <div className="Tool_box mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {
                        listTools.map((tools) => {
                            return <div key={tools.id} className=" flex items-center gap-2 p-2 group border border-zinc-600 rounded-md hover:bg-zinc-800" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay={tools.dad}>
                                <img src={tools.gambar} alt={tools.nama} className="w-12 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
                                <div>
                                    <h3 className="font-bold">{tools.nama}</h3>
                                    <p className="opacity-50">{tools.ket}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            {/* Show up Tools */}

            {/* Project */}
            <div className="Project mt-32 py-10">
                <h1 id="Project" className="text-4xl text-center mb-4 font-bold underline scroll-mt-24">Project</h1>
                <p className="text-center opacity-60" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Berikut ini adalah beberapa project yang pernah saya kerjakan</p>
                <div className="Project_box mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        listProyek.map((project) => {
                            return <div key={project.id} className="grid p-4 bg-zinc-600 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay={project.dad}>
                                <img src={project.gambar} alt={project.nama} />
                                <div className="grid">
                                    <p className="my-4 text-2xl font-bold">{project.nama}</p>
                                    <p className="mb-4">{project.desk}</p>
                                    <div className="flex flex-wrap items-start gap-2">
                                        {
                                            project.tools.map((tool, index) => {
                                                return <div key={index} className="py-1 px-3 bg-zinc-500 rounded-md font-semibold">
                                                    <p>{tool}</p>
                                                </div>
                                            })
                                        }
                                    </div>
                                    <div className="mt-5 p-4 bg-violet-700 rounded-md text-center hover:bg-violet-500">
                                        {project.link.trim() ? (<a href={project.link}>Lihat Website</a>) : (<a href={'/error'}>Lihat Website</a>)}
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            {/* Project */}
        </>
    )
}
