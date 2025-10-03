
import HeroImage from "/assets/hero-img.webp";

export const Image = {
  HeroImage,
};

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/eclipse.png";
import Tools3 from "/assets/tools/c.png";
import Tools4 from "/assets/tools/c++.png";
import Tools5 from "/assets/tools/java.png";
import Tools6 from "/assets/tools/reactjs.png";
import Tools7 from "/assets/tools/tailwind.png";
import Tools8 from "/assets/tools/bootstrap.png";
import Tools9 from "/assets/tools/js.png";
import Tools10 from "/assets/tools/nodejs.png";
import Tools11 from "/assets/tools/github.png";
import Tools12 from "/assets/tools/canva.png";
import Tools13 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Eclipse",
    ket: "Java Code Editor",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "C",
    ket: "Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "C++",
    ket: "Language",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Java",
    ket: "Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "React JS",
    ket: "Framework",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Javascript",
    ket: "Language",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Github",
    ket: "Repository",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Canva",
    ket: "Design App",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Figma",
    ket: "Design App",
    dad: "1300",
  },
];

import Proyek1 from "/assets/proyek/proyekTiketIn.webp";
import Proyek2 from "/assets/proyek/proyekLibraryManagementSystem.webp";
import Proyek3 from "/assets/proyek/e-book.webp";
import Proyek4 from "/assets/proyek/portofolio.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "TiketIn",
    desk: "Penerapan konsep 'Struct' dalam menangani pembelian tiket event",
    tools: ["C"],
    link: "https://github.com/Erpan11400/C/tree/main/AOL%20Semester%201",
    dad: "100",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Library Management System",
    desk: "Penerapan konsep AVL dalam menangani sistem perpustakaan",
    tools: ["C"],
    link: "https://github.com/Erpan11400/C/tree/main/AOL%20Semester%202",
    dad: "200",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "E-Book Management",
    desk: "Design web untuk menunjang sistem perpustakaan",
    tools: ["HTML", "CSS", "JS", "Node.js"],
    link: "https://ebook-app-nodejs.onrender.com/index",
    dad: "300",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Portofolio Website",
    desk: "Sebuah website portofolio",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS", "TypeScript"],
    link: "#",
    dad: "400",
  },
];

export const navbarMenu = [
    {
        id: 1,
        title: "Home",
        link: "#Hero"
    }, 
    {
        id: 2,
        title: "About",
        link: "#About"
    }, 
    {
        id: 3,
        title: "Project",
        link: "#Project"
    }, 
    {
        id: 4,
        title: "Contact",
        link: "#Contact"
    }
]