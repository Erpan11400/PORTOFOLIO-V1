import { motion, AnimatePresence } from "framer-motion"
import { navbarMenu } from '../data/data'

const ResponsiveNavbar = ({ open }: { open: boolean }) => {
    return <AnimatePresence mode="wait">
        {
            open && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.3}}
                    className="absolute top-20 left-0 w-full h-screen z-20"
                >
                    <div className="text-xl bg-violet-700 py-10 m-6 rounded-3xl">
                        <ul className="flex flex-col items-center gap-4">
                            {
                                navbarMenu.map((items) => {
                                    return <li key={items.id} className="p-4 px-30 rounded-2xl hover:bg-violet-900">
                                        <a href={items.link} className="text-2xl font-bold uppercase">{items.title}</a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </motion.div>
            )
        }
    </AnimatePresence>
}

export default ResponsiveNavbar