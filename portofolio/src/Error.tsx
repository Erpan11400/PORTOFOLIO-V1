import { IoIosArrowRoundBack } from "react-icons/io";

const Error = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
      <div className="max-w-2xl mx-auto space-y-3 text-center">
        <h3 className="text-white text-4xl font-semibold sm:text-5xl">
          Page not found
        </h3>
        <p className="text-white">
          Sorry, the page you are looking for could not be found or has been removed.
        </p>
        <a href="/" className="text-violet-600 duration-150 hover:text-violet-400 font-medium inline-flex items-center gap-x-1">
        <IoIosArrowRoundBack size={40} /> Go Back</a>
      </div>
    </div>
  )
}

export default Error