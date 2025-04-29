import { ReactNode } from "react";

const SectionHeading = ({ title }: { title: ReactNode }) => {
  return <h2 className="text-4xl font-bold text-center mb-10">{title}</h2>;
};

export default SectionHeading;
