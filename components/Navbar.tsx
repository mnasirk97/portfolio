"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
    { name: "Education & Training", path: "/education-training" },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Muhammad Nasir Khan
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              onClick={toggleMenu}
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// "use client";

// import Link from "next/link";
// import { useState } from "react";

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     if (typeof window !== "undefined") {
//       if (darkMode) {
//         document.documentElement.classList.remove("dark");
//       } else {
//         document.documentElement.classList.add("dark");
//       }
//     }
//   };

//   return (
//     <nav className="flex items-center justify-between p-4 shadow-md bg-gray-100 dark:bg-gray-800">
//       <Link href="/" className="text-2xl font-bold">
//         Muhammad Nasir Khan
//       </Link>
//       <ul className="flex gap-6 items-center">
//         <li>
//           <Link href="/">Home</Link>
//         </li>
//         <li>
//           <Link href="/about">About</Link>
//         </li>
//         <li>
//           <Link href="/projects">Projects</Link>
//         </li>
//         <li>
//           <Link href="/contact">Contact</Link>
//         </li>
//         <li>
//           <Link href="/education-training">Education & Training</Link>
//         </li>
//         <li>
//           <Link href="/certifications">Certifications</Link>
//         </li>
//         <li>
//           <Link href="/experience">Experience</Link>
//         </li>
//         <li>
//           <Link href="/resume">Resume</Link>
//         </li>
//         <button
//           onClick={toggleDarkMode}
//           className="ml-4 p-2 rounded bg-blue-500 text-white dark:bg-yellow-400 dark:text-black"
//         >
//           {darkMode ? "Light" : "Dark"}
//         </button>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
