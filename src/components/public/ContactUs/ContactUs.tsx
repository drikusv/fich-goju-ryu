import { useState } from "react";
import nodemailer from "nodemailer";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "drikusdevelopment@gmail.com", // Your Gmail address
      pass: "tnsfqywmdphkotsv", // App password (not your Gmail password)
    },
  });

  const mailOptions = {
    from: formData.email,
    to: "drikusventer16@gmail.com",
    subject: "Contact Form Submission",
    text: `You have received a new message from ${formData.name} (${formData.email}): ${formData.message}`,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Email sent: " + info.response);
      setSubmitted(true);
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-black">
      <h1 className="font-impact text-4xl md:text-5xl font-bold mb-6 text-center">
        Contact Us
      </h1>
      <section className="bg-white rounded-xl shadow p-8 mb-8">
        <p className="text-lg text-gray-800 mb-6 text-center">
          Have a question or want to join a class? Fill out the form below or
          email us at{" "}
          <a
            href="mailto:info@gojuryufichardtpark.com"
            className="text-blue-700 underline"
          >
            info@gojuryufichardtpark.com
          </a>
          .
        </p>
        {!submitted ? (
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="border border-gray-300 rounded px-4 py-2"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded px-4 py-2"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <textarea
              placeholder="Your Message"
              required
              className="border border-gray-300 rounded px-4 py-2 min-h-[100px]"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <button
              type="submit"
              className="bg-black hover:bg-[#de1e2c] text-white font-semibold px-6 py-2 rounded-full shadow transition"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center text-green-700 font-semibold text-lg">
            Thank you for reaching out! We’ll get back to you soon.
          </div>
        )}
      </section>
      <section className="bg-[#FBF7EF] rounded-xl shadow p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Visit Us</h2>
        <p className="text-gray-800 mb-2">
          <span className="font-semibold">Fichardtpark Sport Centre</span>
          <br />
          Mondays & Wednesdays, 17:15 – 18:15
        </p>
        <p className="text-gray-800">
          Visitors are always welcome to watch or try a class!
        </p>
      </section>
    </div>
  );
}
