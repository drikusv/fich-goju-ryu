import { useState } from "react";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
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
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded px-4 py-2"
            />
            <textarea
              placeholder="Your Message"
              required
              className="border border-gray-300 rounded px-4 py-2 min-h-[100px]"
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
