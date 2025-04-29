import StackAnimation from "./StackAnimation";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Muhammad Nasir Khan
      </h1>
      <StackAnimation />
      <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
        Passionate Full Stack Developer specializing in building exceptional
        digital experiences with modern web technologies.
      </p>
      <div className="mt-8 flex gap-6">
        <a
          href="/resume"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          View Resume
        </a>
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
