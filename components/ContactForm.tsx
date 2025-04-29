
"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block mb-2 font-semibold">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded p-3 dark:bg-gray-900 dark:border-gray-700"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 font-semibold">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded p-3 dark:bg-gray-900 dark:border-gray-700"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 font-semibold">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full border rounded p-3 dark:bg-gray-900 dark:border-gray-700"
        />
      </div>

      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full"
      >
        Send Message
      </button>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mt-8 text-2xl">
        <a
          href="https://github.com/mnasirk97"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/mnasirk97"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:khanmuhammadnasir9977@gmail.com" className="hover:text-blue-600">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </form>
  );
};

export default ContactForm;


// "use client";

// import { useState } from "react";
// import emailjs from "@emailjs/browser";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       await emailjs.send(
//         "service_1uwvxoy", // 👈 Replace this with your service ID
//         "template_agvc36p", // 👈 Replace with your template ID
//         {
//           from_name: formData.name,
//           reply_to: formData.email,
//           message: formData.message,
//         },
//         "47USyESj8LiYApZPU" // 👈 Public key from EmailJS dashboard
//       );

//       alert("Message Sent Successfully!");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       console.error("Email sending failed:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       {/* Same input fields as before */}
//     </form>
//   );
// };

// export default ContactForm;


