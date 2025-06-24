export default function About() {
  const instructors = [
    {
      name: "Johannes Botma",
      title: "Chief Instructor, 4th Dan",
      description: "",
      phone: "084 581 5152",
      image: "/images/Goju_logo-removebg-preview.png",
    },
    {
      name: "Jacques Hugo",
      title: "3rd Dan Administrative",
      description: "",
      phone: "083 232 6891",
      image: "/images/Goju_logo-removebg-preview.png",
    },
    {
      name: "Drikus Venter",
      title: "3rd Dan Instructor",
      description: "",
      phone: "061 334 6506",
      image: "/images/Goju_logo-removebg-preview.png",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-black">
      <h1 className="font-impact text-4xl lg:text-5xl font-bold mb-6 text-center">
        About Us
      </h1>
      <section className="bg-white rounded-xl shadow p-8 mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
        <p className="text-gray-800 mb-4">
          At Fichardtpark Goju Ryu Karate, our mission is to empower individuals
          of all ages to become stronger, more confident, and more disciplined
          through the practice of traditional Okinawan karate. We believe in
          building a supportive community where everyone can grow—physically and
          mentally—while learning practical self-defense skills.
        </p>
        <h2 className="text-2xl font-bold mb-2">Our Values</h2>
        <ul className="list-disc list-inside text-gray-800 mb-4">
          <li>Respect for self and others</li>
          <li>Continuous self-improvement</li>
          <li>Discipline and perseverance</li>
          <li>Community and friendship</li>
          <li>Authenticity in martial arts</li>
        </ul>
        <h2 className="text-2xl font-bold mb-2">Meet the Team</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
          {instructors.map((inst, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg p-6 shadow flex flex-col items-center"
            >
              {inst.image && (
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="w-20 h-20 mb-2 rounded-full object-cover border-2 border-blue-700"
                />
              )}
              <h3 className="font-semibold text-lg mb-1 text-center">
                {inst.name}
              </h3>
              <p className="text-blue-700 text-center mb-1">{inst.title}</p>
              {inst.description && (
                <p className="text-gray-700 text-center mb-1">
                  {inst.description}
                </p>
              )}
              {inst.phone && (
                <p className="text-gray-700 text-center flex items-center gap-1">
                  <span role="img" aria-label="phone">
                    📞
                  </span>
                  <a
                    href={`tel:${inst.phone.replace(/\s/g, "")}`}
                    className="underline"
                  >
                    {inst.phone}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#FBF7EF] rounded-xl shadow p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Join Our Karate Family</h2>
        <p className="text-gray-800 mb-4">
          Whether you want to get fit, learn self-defense, or make new friends,
          you’ll find a welcoming home at our dojo. Come visit us and experience
          the spirit of Goju Ryu!
        </p>
        <a
          href="/contact"
          className="inline-block bg-black hover:bg-[#b81a25] text-white font-semibold px-8 py-3 rounded-full shadow transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
