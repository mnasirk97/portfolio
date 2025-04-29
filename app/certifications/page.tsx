import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";

const certifications = [
  { title: "Full Stack Development Training", image: "/full_stack.jpeg" },
  { title: "Generative AI Application Developer Certificate", image: "/GenAI_developer.jpeg" },
  {
    title: "Database Developer Certification (SQL)",
    image: "/database_developer_SQL.jpeg",
  },
];

const Certifications = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 pt-24">
      <SectionHeading title="Certifications" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="rounded overflow-hidden shadow-lg dark:bg-gray-800"
          >
            <Image
              src={cert.image}
              alt={cert.title}
              width={400}
              height={300}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center">
                {cert.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
