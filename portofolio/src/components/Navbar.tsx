import { useEffect, useState } from 'react';
import { navbarMenu } from '../data/data'
import { MdMenu } from "react-icons/md";
import ResponsiveNavbar from './ResponsiveNavbar';

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        const handleResize = () => {
            if (window.scrollY === 0) {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/70 backdrop-blur-md shadow-md rounded-b-xl text-black"
                    : "bg-transparent"
                }`}>
                <div className="container p-2 flex justify-between my-4 items-center">
                    <div>
                        <h1 className='text-3xl font-bold'>PORTOFOLIO</h1>
                    </div>
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-6'>
                            {
                                navbarMenu.map((items) => {
                                    return <li key={items.id}>
                                        <a href={items.link} className='inline-block p-3 hover:bg-violet-700 rounded-2xl font-bold uppercase'>{items.title}</a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className='md:hidden' onClick={() => setOpen(!open)}>
                        <MdMenu className='text-3xl' />
                    </div>
                </div>
            </nav>
            <ResponsiveNavbar open={open} />
        </>
    )
}

export default Navbar