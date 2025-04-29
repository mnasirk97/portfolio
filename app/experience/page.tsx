import SectionHeading from "@/components/SectionHeading";

const Experience = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 pt-24">
      <SectionHeading title="Experience" />

      <div className="space-y-8 mt-8">
        <div className="border-l-4 border-green-600 pl-6">
          <h3 className="text-2xl font-semibold">Backend & Database Developer</h3>
          <p className="text-gray-500 dark:text-gray-400">
          Pakistan Automation | July 2024 - Present
          </p>
          <p className="mt-2">
            - Building scalable REST APIs with Node.js, Express.js, Python and Flask.
            <br />
            - Managed database operations with SQL queries to handle data for various applications. 
            <br />- Collaborated with front-end developers to create seamless and integrated user experiences.
            <br />- Performed data validation and implemented error handling processes to maintain system stability.
            <br />- Participated in debugging and performance tuning of APIs to enhance functionality and response
            times.
            <br />- Implemented secure authentication mechanisms and data validation processes. 
            <br />- nvolved in debugging and testing APIs, ensuring quality and reliability. 
          </p>
        </div>

        <div className="border-l-4 border-green-600 pl-6">
          <h3 className="text-2xl font-semibold">Jr Frontend Developer</h3>
          <p className="text-gray-500 dark:text-gray-400">
          Kalbosoft Web Agency | Jan 2024 - June 2024

          </p>
          <p className="mt-2">
            - Developed responsive web interfaces using React.js and Next.js to ensure an optimal user experience across
            various devices.
            <br />
            - Collaborated with design teams to implement visually appealing and functional components,
            ensuring consistency with the overall design vision.
            <br />- Additionally, debugged and tested front-end code to
identify and resolve issues, ensuring high-quality, reliable, and smooth performance.

          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
