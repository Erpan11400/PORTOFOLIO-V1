import { Image, listTools, listProyek } from "./data/data"
import { IoMdDownload, IoMdEye } from "react-icons/io";

function App() {
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
              <p>" Musuh terberatmu adalah dirimu sendiri !! "</p>
            </div>
          </div>
          <h1 className="text-5xl/tight">Hi 🙌🏻 I'm Ervan Setyatama</h1>
          <br />
          <h3 className="text-xl">Undergraduate Computer Science | Software Engineering</h3>
          <div className="mt-10 flex items-center justify-center lg:justify-start sm:gap-4 gap-2">
            <a href="#" className="flex items-center gap-1 bg-violet-700 p-4 rounded-2xl hover:bg-violet-500">Download CV <IoMdDownload size={25} /></a>
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
      <div className="About bg-zinc-800 w-full sm:w-3/4 lg:w-4/5 mx-auto p-7 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <p className="text-base/loose text-justify mb-6 opacity-60">Saya mahasiswa ( <span className="text-yellow-300">S1</span> ) jurusan <span className="text-blue-300 italic">Computer Science</span> BINUS University yang lulus di tahun 2027 yang tertarik dengan Software Engineering. Saya terlibat di dalam kepengurusan organisasi mahasiswa badminton sebagai HuMas organisasi, saya juga terlibat dalam tim persiapan ajaran baru sebagai Freshmen Partner. Saya termotivasi dan siap dengan tantangan baru untuk meningkatkan keterampilan diri.</p>
        <div className="flex items-center justify-center">
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
              return <div key={project.id} className="p-4 bg-zinc-600 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay={project.dad}>
                <img src={project.gambar} alt={project.nama} />
                <div>
                  <p className="my-4 text-2xl font-bold">{project.nama}</p>
                  <p className="mb-4">{project.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {
                      project.tools.map((tool, index) => {
                        return <div className="py-1 px-3 bg-zinc-500 rounded-md font-semibold">
                          <p key={index}>{tool}</p>
                        </div>
                      })
                    }
                  </div>
                  <div className="mt-5 p-4 bg-violet-700 rounded-md text-center hover:bg-violet-500">
                    <a href={project.link}>Lihat Website</a>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
      {/* Project */}

      {/* Contact */}
      <div className="Contact mt-32 sm:p-10 p-0">
        <h1 id="Contact" className="text-center text-4xl font-bold underline scroll-mt-24">Contact</h1>
        <p className="my-5 text-center opacity-60" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">You can contact me</p>
        <form action="https://formsubmit.co/ervan.gkbi@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="300">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label>Nama Lengkap</label>
              <input type="text" name="name" placeholder="Enter your name" required className="p-2 border border-zinc-500 rounded-sm" />
            </div>
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter your email" required className="p-2 border border-zinc-500 rounded-sm" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Pesan">Pesan</label>
              <textarea name="pesan" id="pesan" cols={30} rows={7} placeholder="Your message here" className="p-2 border border-zinc-500 rounded-sm"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="p-3 rounded-lg w-full bg-violet-700 cursor-pointer hover:bg-violet-500">Submit</button>
            </div>
          </div>
        </form>
      </div>
      {/* Contact */}
    </>
  )
}

export default App
