import { useState } from "react";
// import { Resend } from "resend";
// import nodemailer from "nodemailer";

export default function ContactUs() {
  const emailTemplate = `mailto:Fichardtpark.Karate@gmail.com?subject=Inquiry about Goju-Ryu Classes&body=Hello,%0D%0A%0D%0AI am interested in learning more about your Goju-Ryu classes.%0D%0A%0D%0APlease provide me with information about:%0D%0A- Class schedules%0D%0A- Beginner requirements%0D%0A- Pricing%0D%0A%0D%0AThank you!%0D%0A%0D%0AName:%0D%0APhone:%0D%0AExperience level:`;
  
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-black">
      <h1 className="font-impact text-4xl lg:text-5xl font-bold mb-6 text-center">
        Contact Us
      </h1>
      <section className="bg-white rounded-xl shadow p-8 mb-8">
        <p className="text-lg text-gray-800 mb-6 text-center">
          Have a question or want to join a class? Email us at{" "}
          <a
            href={emailTemplate}
            className="text-blue-700 underline hover:text-blue-900"
          >
            Fichardtpark.Karate@gmail.com
          </a>
          .
        </p>
        <div className="text-center text-gray-700 font-semibold text-lg mt-8">
          Please email us directly or visit us in person!
        </div>
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
