import SectionHeading from "@/components/SectionHeading";

const Resume = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 pt-24">
      <SectionHeading title="My Resume" />

      {/* View Resume */}
      <div className="mt-8 flex flex-col items-center gap-6">
        <iframe
          src="/Muhammad_Nasir_Khan_Resume.pdf"
          width="100%"
          height="600"
          className="rounded-lg shadow-lg"
        ></iframe>

        {/* Download Resume Button */}
        <a
          href="/Muhammad_Nasir_Khan_Resume.pdf"
          download
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
