import SectionHeading from "@/components/SectionHeading";

const EducationTraining = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 pt-24">
      <SectionHeading title="Education & Training" />

      <div className="space-y-8 mt-8">
        <div className="border-l-4 border-blue-600 pl-6">
          <h3 className="text-2xl font-semibold">
          Bachelor of Science in Computer Science (BSCS) 
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
          Virtual University of Pakistan | Undergraduate
          </p>
          <p className="mt-2">
          - Developing a strong foundation in software development, data structures, algorithms, database management,
          and system design.
          <br />- Gaining hands-on experience with programming languages, web technologies, and
          software engineering principles to build scalable and efficient applications.

          <br />- Learning data structures, computer networks, operating systems, and web development.
          <br />- Developing problem-solving skills through practical projects and continuous assessments.
          </p>
        </div>

        <div className="border-l-4 border-blue-600 pl-6">
          <h3 className="text-2xl font-semibold">
          CERTIFIED CLOUD APPLIED AI ENGINEER (GENENG)
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
          Governor Sindh Initiative for Agentic AI | Undergraduate
          </p>
          <p className="mt-2">
          - Learning to design and deploy AI Agents for automation and intelligent task handling.
          <br />- Developing hands-on experience with cloud computing, AI model deployment,
          and advanced data processing techniques to create innovative and scalable AI applications.
          <br />- Gaining expertise in machine learning workflows, cloud-based AI solutions, and real-world
          GenAI applications.
          <br />- Exploring prompt engineering, autonomous agents, and AI integration into modern web and
          metaverse platforms.
          </p>
        </div>

        <div className="border-l-4 border-blue-600 pl-6">
          <h3 className="text-2xl font-semibold">
            Full Stack Web Development Training (Professional Software Development Certificate)
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
          Baitussalam Tech Park, Clifton Karachi
          | 2024
          </p>
          <p className="mt-2">
          - Learned MERN stack development, REST APIs, authentication systems,
          and cloud deployment.
          <br />- Acquired hands-on experience in designing, developing, and deploying full-stack applications.
          <br />- Gained proficiency
          in front-end and back-end technologies, including JavaScript, Node.js, Express.js, MongoDB, and React.js.
          <br />- Learned best practices for API development, database management, and responsive UI design to build scalable
          and efficient web applications.

          </p>
        </div>

        {/* <div className="border-l-4 border-blue-600 pl-6">
          <h3 className="text-2xl font-semibold">Generative AI Bootcamp</h3>
          <p className="text-gray-500 dark:text-gray-400">
            DEF Organization | 2024
          </p>
          <p className="mt-2">
            Hands-on training on building AI chatbots, GPT applications, and
            working with large language models.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default EducationTraining;
