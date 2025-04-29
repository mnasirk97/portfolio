import SectionHeading from "@/components/SectionHeading";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 pt-24">
      {" "}
      {/* Added pt-24 for space on top */}
      <SectionHeading title="About Me" />
      <p className="mt-6 text-lg leading-8">
        Hello! I&apos;m <strong>Muhammad Nasir Khan</strong>, a passionate Full
        Stack Developer with a strong background in creating dynamic web
        applications. My expertise lies in the MERN Stack, Backend APIs,
        Frontend design, Database management, and developing AI-powered
        chatbots.
      </p>
      <p className="mt-4 text-lg leading-8">
        I love bringing ideas to life through clean code and beautiful user
        experiences. I enjoy solving complex problems, optimizing web
        performance, and learning new technologies to stay up-to-date in the
        tech world.
      </p>
    </section>
  );
};

export default About;

// import SectionHeading from "@/components/SectionHeading";

// const About = () => {
//   return (
//     <section className="max-w-4xl mx-auto p-6">
//       <SectionHeading title="About Me" />
//       <p className="mt-6 text-lg leading-8">
//         Hello! I&apos;m <strong>Muhammad Nasir Khan</strong>, a passionate Full
//         Stack Developer with a strong background in creating dynamic web
//         applications. My expertise lies in the MERN Stack, Backend APIs,
//         Frontend design, Database management, and developing AI-powered
//         chatbots.
//       </p>
//       <p className="mt-4 text-lg leading-8">
//         I love bringing ideas to life through clean code and beautiful user
//         experiences. I enjoy solving complex problems, optimizing web
//         performance, and learning new technologies to stay up-to-date in the
//         tech world.
//       </p>
//     </section>
//   );
// };

// export default About;
