
import HeroImage from "/assets/hero-img.webp";

export const Image = {
  HeroImage,
};

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/eclipse.png";
import Tools3 from "/assets/tools/c.png";
import Tools4 from "/assets/tools/c++.png";
import Tools5 from "/assets/tools/blade.png";
import Tools6 from "/assets/tools/php.png";
import Tools7 from "/assets/tools/js.png";
import Tools8 from "/assets/tools/ts.png";
import Tools9 from "/assets/tools/laravel.png";
import Tools10 from "/assets/tools/reactjs.png";
import Tools11 from "/assets/tools/tailwind.png";
import Tools12 from "/assets/tools/bootstrap.png";
import Tools13 from "/assets/tools/nodejs.png";
import Tools14 from "/assets/tools/github.png";
import Tools15 from "/assets/tools/canva.png";
import Tools16 from "/assets/tools/figma.png";

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
    nama: "Blade",
    ket: "Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "PHP",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Javascript",
    ket: "Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Typescript",
    ket: "Language",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Laravel",
    ket: "Framework",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "React JS",
    ket: "Framework",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Github",
    ket: "Repository",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "Canva",
    ket: "Design App",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "Figma",
    ket: "Design App",
    dad: "1600",
  },
];

import Proyek1 from "/assets/proyek/proyekTiketIn.webp";
import Proyek2 from "/assets/proyek/proyekLibraryManagementSystem.webp";
import Proyek3 from "/assets/proyek/database - hehe_groceries.webp";
import Proyek4 from "/assets/proyek/e-book.webp";
import Proyek5 from "/assets/proyek/portofolio.webp";
import Proyek6 from "/assets/proyek/simpleAPI.webp";
import Proyek7 from "/assets/proyek/homeFinder1.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "TiketIn",
    desk: "Implementing the ‘struct’ concept in ticket purchase handling",
    tools: ["C"],
    link: "https://github.com/Erpan11400/C/tree/main/AOL%20Semester%201",
    dad: "100",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Library Management System",
    desk: "Implementing the ‘AVL Tree’ programming concept in constructing a library management system",
    tools: ["C"],
    link: "https://github.com/Erpan11400/C/tree/main/AOL%20Semester%202",
    dad: "200",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Databse - hehe_groceries",
    desk: "Database setup for a restaurant system that includes information about employees, customers, menu items, and transaction records",
    tools: ["Query", "XAMPP"],
    link: "",
    dad: "300",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "E-Book Management",
    desk: "Web design to help the library system",
    tools: ["HTML", "CSS", "JS", "Node.js"],
    link: "https://ebook-app-nodejs.onrender.com/index",
    dad: "400",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Portofolio Website",
    desk: "Portofolio Web of me",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS", "TypeScript"],
    link: "/",
    dad: "500",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Simple API - View Data",
    desk: "An example of an API that can retrieve data from a Database (XAMPP) and then display it on the web frontend",
    tools: ["PHP", "Laravel", "XAMPP"],
    link: "",
    dad: "600",
  },
  {
    id: 7,
    gambar: Proyek7,
    nama: "HomeFinder",
    desk: "HomeFinder is a web application built with Laravel, designed to help users find their perfect property. It allows users to browse available properties, view detailed information, and manage their favorite listings. Users can register, login, and view property details",
    tools: ["PHP", "Laravel", "Bootstrap", "XAMPP"],
    link: "https://github.com/Erpan11400/HomeFinder",
    dad: "700",
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
]

export const experience = [
  {
    id: 1,
    start: "Feb 2021",
    end: "Feb 2022",
    job: "Organization Officer",
    company: "SMAN 1 Gunung Sindur",
    at: "Kab. Bogor, Indonesia",
    ket: "",
  },
  {
    id: 2,
    start: "Jul 2021",
    end: "Aug 2021",
    job: "Event Coordinator",
    company: "SMAN 1 Gunung Sindur",
    at: "Kab. Bogor, Indonesia",
    ket: "",
  },
  {
    id: 3,
    start: "Jan 2022",
    end: "Current",
    job: "Music Coordinator",
    company: "GKBI Serpong Congregation",
    at: "Tangerang, Indonesia",
    ket: "",
  },
  {
    id: 4,
    start: "May 2024",
    end: "May 2024",
    job: "Event Coordinator",
    company: "BINUS University",
    at: "Malang, Indonesia",
    ket: "",
  },
  {
    id: 5,
    start: "May 2024",
    end: "Jul 2024",
    job: "Security Guard",
    company: "BINUS University",
    at: "Malang, Indonesia",
    ket: "",
  },
  {
    id: 6,
    start: "Sep 2024",
    end: "Jul 2025",
    job: "Freshmen Partner",
    company: "BINUS University",
    at: "Malang, Indonesia",
    ket: "",
  },
]