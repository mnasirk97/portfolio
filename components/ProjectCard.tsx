import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  image: string;
  sourceCode: string;
  livePreview: string;
}

const ProjectCard = ({
  title,
  image,
  sourceCode,
  livePreview,
}: ProjectCardProps) => {
  return (
    <div className="rounded overflow-hidden shadow-lg dark:bg-gray-800">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="flex gap-4">
          <Link
            href={sourceCode}
            target="_blank"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Source Code
          </Link>
          <Link
            href={livePreview}
            target="_blank"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
          >
            Live Preview
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
