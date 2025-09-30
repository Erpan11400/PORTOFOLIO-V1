import { Image } from "./data/data"
import { IoMdDownload, IoMdEye } from "react-icons/io";

function App() {
  return (
    <>
      {/* Home Session or Hero Session */}
      <div id="#Hero" className="Hero grid grid-cols-1 lg:grid-cols-2 xl:gap-0 gap-4 items-center">
        <div className="flex justify-center my-5 lg:hidden">
          <img src={Image.HeroImage} alt="Ervan Setyatama" className="w-[500px] rounded-b-full" />
        </div>
        <div className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src={Image.HeroImage} alt="Ervan Setyatama" className="w-10 rounded-md lg:block hidden" />
              <p>" Musuh terberatmu adalah dirimu sendiri !! "</p>
            </div>
          </div>
          <h1 className="text-5xl/tight">Hi 🙌🏻 saya Ervan Setyatama</h1>
          <br />
          <h3 className="text-2xl">Undergraduate Student at Binus University</h3>
          <br />
          <p className="text-base text-justify mb-2 opacity-60">Saya adalah mahasiswa Sarjana ( S1 ) dengan jurusan <span className="italic text-yellow-300">Computer Science</span>. Saya mulai menyukai programming sejak duduk dibangku SMA terlebih lagi dengan web dan juga backend, maka saya memutuskan untuk mendalami hal tersebut.</p>
          <p className="text-base text-justify mb-6 opacity-60">Diluar bidang programming, saya juga sempai mengikuti beberapa organisasi. Saya juga memiliki ketertarikan dengan team work, saya suka bertukar ide - ide. Saya memiliki rasa tanggung jawab dalam menjalani kegiatan, maka saya akan bersungguh - sungguh menjalani tanggung jawab hingga akhir.</p>
          <div className="flex items-center justify-center lg:justify-start sm:gap-4 gap-2">
            <a href="#" className="flex items-center gap-1 bg-violet-700 p-4 rounded-2xl hover:bg-violet-500">Download CV <IoMdDownload size={25} /></a>
            <a href="#" className="flex items-center gap-1 bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500">View Project <IoMdEye size={25} /> </a>
          </div>
        </div>
        <div className="my-5 lg:block hidden">
          <img src={Image.HeroImage} alt="Ervan Setyatama" className="w-[500px] lg:ml-auto rounded-b-full" />
        </div>
      </div>
      {/* Home Session or Hero Session */}
    </>
  )
}

export default App
