import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 pt-24">
      <SectionHeading title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          title="Nexir E-commerce Website"
          image="/nexir_image_1.jpeg"
          sourceCode="https://github.com/mnasirkhan97/nexir"
          livePreview="https://nexir.vercel.app"
        />
        <ProjectCard
          title="Job Interview Preparation Assistant"
          image="/job_interview_prep.png"
          sourceCode="https://huggingface.co/spaces/nasirkhan97/Interview_Chatbot/tree/main"
          livePreview="https://huggingface.co/spaces/nasirkhan97/Interview_Chatbot"
        />
        <ProjectCard
          title="Essay Elevate Chatbot"
          image="/Essay_Elevate.png"
          sourceCode="https://huggingface.co/spaces/nasirkhan97/EssayElevate/tree/main"
          livePreview="https://huggingface.co/spaces/nasirkhan97/EssayElevate"
        />
        <ProjectCard
          title="Password Strength Meter"
          image="/password-strength-indicator.png"
          sourceCode="https://github.com/mnasirk97/Password_Strength_Indicator/blob/main/app.py"
          livePreview="https://password-strength-indicator-v1-nasir.streamlit.app//"
        />
      </div>
    </section>
  );
};

export default Projects;
