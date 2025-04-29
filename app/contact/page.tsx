import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <section className="max-w-2xl mx-auto p-6 pt-24">
      <SectionHeading title="Contact Me" />
      <p className="text-lg text-center mb-10">
        Feel free to get in touch! Fill the form below or connect with me
        through social media.
      </p>
      <ContactForm />
    </section>
  );
};

export default Contact;
