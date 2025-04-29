"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      icon: <FaGithub size={24} />,
      href: "https://github.com/your-github", // replace with your profile
    },
    {
      id: 2,
      icon: <FaLinkedin size={24} />,
      href: "https://linkedin.com/in/your-linkedin", // replace with your profile
    },
    {
      id: 3,
      icon: <FaEnvelope size={24} />,
      href: "mailto:your-email@example.com", // replace with your email
    },
  ];

  return (
    <div className="flex justify-center items-center space-x-6 mt-6">
      {links.map(({ id, icon, href }) => (
        <Link
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
