"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// List of your stacks
const stacks = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Backend Developer",
  "Frontend Developer",
  "Database Developer",
  "Chatbot Developer",
  "Generative AI Application Developer",
];

const TYPING_SPEED = 100; // Milliseconds per character
const DELETING_SPEED = 50; // Speed while deleting
const DELAY_AFTER_TYPING = 2000; // Wait time after full text typed (ms)

const StackAnimation = () => {
  const [currentStackIndex, setCurrentStackIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentStack = stacks[currentStackIndex];

    let typingTimeout: NodeJS.Timeout;

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, DELETING_SPEED);
    } else {
      typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => currentStack.slice(0, prev.length + 1));
      }, TYPING_SPEED);
    }

    // If finished typing and not deleting
    if (!isDeleting && displayedText === currentStack) {
      typingTimeout = setTimeout(() => setIsDeleting(true), DELAY_AFTER_TYPING);
    }

    // If finished deleting, move to next stack
    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentStackIndex((prev) => (prev + 1) % stacks.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, currentStackIndex]);

  return (
    <motion.h2
      key={currentStackIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-2xl md:text-4xl font-semibold text-blue-500 dark:text-yellow-400"
    >
      {displayedText}
      <span className="blinking-cursor">|</span> {/* Cursor effect */}
    </motion.h2>
  );
};

export default StackAnimation;

// "use client";

// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// // List of skills
// const stacks = [
//   "Full Stack Developer",
//   "MERN Stack Developer",
//   "Backend Developer",
//   "Frontend Developer",
//   "Database Developer",
//   "Chatbot Developer",
//   "Generative AI Application Developer",
// ];

// const StackAnimation = () => {
//   const [current, setCurrent] = useState(0);
//   const [text, setText] = useState("");
//   const [isTyping, setIsTyping] = useState(true);

//   // Typewriter effect implementation
//   useEffect(() => {
//     const typingInterval = setInterval(() => {
//       if (isTyping && text.length < stacks[current].length) {
//         setText((prev) => prev + stacks[current][text.length]);
//       } else if (!isTyping && text.length === 0) {
//         setIsTyping(true);
//         setCurrent((prev) => (prev + 1) % stacks.length);
//       }
//     }, 100); // Controls typing speed

//     return () => clearInterval(typingInterval);
//   }, [text, current, isTyping]);

//   useEffect(() => {
//     if (text === stacks[current]) {
//       setIsTyping(false);
//     }
//   }, [text, current]);

//   return (
//     <motion.h2
//       key={current}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.5 }}
//       className="text-2xl md:text-4xl font-semibold text-blue-500 dark:text-yellow-400"
//     >
//       {text}
//     </motion.h2>
//   );
// };

// export default StackAnimation;

// "use client";

// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// const stacks = [
//   "Full Stack Developer",
//   "MERN Stack Developer",
//   "Backend Developer",
//   "Frontend Developer",
//   "Database Developer",
//   "Chatbot Developer",
//   "Generative AI Application Developer",
// ];

// const StackAnimation = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % stacks.length);
//     }, 2000); // Change stack every 2 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <motion.h2
//       key={current}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.5 }}
//       className="text-2xl md:text-4xl font-semibold text-blue-500 dark:text-yellow-400"
//     >
//       {stacks[current]}
//     </motion.h2>
//   );
// };

// export default StackAnimation;
