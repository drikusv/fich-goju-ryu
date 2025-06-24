export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-black">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="font-impact text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Discover Okinawan GoJu Ryu Karate
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Looking for a fun way to get fit, boost your confidence, and learn
            practical self-defense? Join our friendly karate community—no
            experience needed!
          </p>
          <a
            href="/contact"
            className="inline-block bg-black hover:bg-[#b81a25] text-white font-semibold px-8 py-3 rounded-full shadow transition"
          >
            Try Your First Class Free
          </a>
        </div>
        <div className="flex-1 flex justify-center ">
          <img
            src="/images/OkinawanGoju.png"
            alt="Karate demonstration"
            className="rounded-2xl shadow-lg w-full max-w-xs object-cover sm:max-w-[8rem] md:max-w-[12rem] lg:max-w-[13rem] xl:max-w-[16rem] "
          />
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Who Can Join?</h2>
          <p className="text-gray-700">
            Anyone age 6 and up! Whether you’re a complete beginner or just
            curious, you’ll fit right in. All fitness levels welcome.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">When & Where?</h2>
          <p className="text-gray-700">
            Mondays & Wednesdays
            <br />
            17:15 – 18:15
            <br />
            Fichardtpark Sport Centre
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Visitors Welcome</h2>
          <p className="text-gray-700">
            Not sure if karate is for you? Come watch or join a class for
            free—no pressure, just fun!
          </p>
        </div>
      </section>

      {/* About Goju Ryu */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">
          What Makes Our Karate Special?
        </h2>
        <p className="text-lg text-gray-800 mb-4 text-center max-w-3xl mx-auto">
          Goju Ryu karate is about more than just punches and kicks. It’s a
          blend of powerful moves and smooth, flowing techniques that anyone can
          learn. You’ll get stronger, more flexible, and more confident—while
          having a great time with new friends.
        </p>
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          <div className="flex-1 bg-gray-50 rounded-xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">Balance & Harmony</h3>
            <p className="text-gray-700">
              We teach you how to use both strength and flexibility, helping you
              find balance in karate and in life.
            </p>
          </div>
          <div className="flex-1 bg-gray-50 rounded-xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">
              Practical Self-Defense
            </h3>
            <p className="text-gray-700">
              Learn simple, effective ways to protect yourself and stay
              safe—skills you can use in everyday life.
            </p>
          </div>
          <div className="flex-1 bg-gray-50 rounded-xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">Personal Growth</h3>
            <p className="text-gray-700">
              Karate isn’t just about the body—it’s about building confidence,
              focus, and respect for yourself and others.
            </p>
          </div>
        </div>
      </section>

      {/* Instructor Highlight */}
      {/* <section className="mb-12">
        <div className="bg-blue-50 border-l-4 border-blue-700 rounded-xl p-6 shadow flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">Meet Your Instructors</h2>
            <p className="text-gray-800 mb-2">
              Our chief instructor,{" "}
              <span className="font-semibold">Danie Steenkamp</span> (8th Dan),
              is one of the most experienced karate teachers in the country. All
              our instructors are friendly, patient, and have years of
              experience helping beginners succeed.
            </p>
            <p className="text-gray-800">
              We’re part of a worldwide karate family, so you’ll be learning
              authentic skills recognized around the globe.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=256&q=80"
            alt="Instructor"
            className="rounded-full w-32 h-32 object-cover border-4 border-blue-700"
          />
        </div>
      </section> */}

      {/* Training Structure */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">
          What Will You Learn?
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">Basics</h3>
            <p className="text-gray-700">
              We start with simple moves—blocks, punches, and kicks—so you can
              build confidence from day one.
            </p>
          </div>
          <div className="flex-1 bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">Patterns</h3>
            <p className="text-gray-700">
              You’ll learn fun routines (called kata) that help you remember and
              combine techniques.
            </p>
          </div>
          <div className="flex-1 bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">Partner Practice</h3>
            <p className="text-gray-700">
              Try out your skills with a partner in a safe, friendly way—no
              experience or special fitness needed.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Why Try Karate?</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-gray-50 rounded-xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">Get Fit & Energized</h3>
            <p className="text-gray-700">
              Karate is a fun way to exercise, improve your strength, and boost
              your energy—no gym required!
            </p>
          </div>
          <div className="flex-1 bg-gray-50 rounded-xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">Feel More Confident</h3>
            <p className="text-gray-700">
              You’ll gain self-confidence and learn to stay calm and focused,
              even in stressful situations.
            </p>
          </div>
          <div className="flex-1 bg-gray-50 rounded-xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">Make New Friends</h3>
            <p className="text-gray-700">
              Our classes are friendly and welcoming. You’ll meet people of all
              ages and backgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* International Links */}
      <section className="mb-12">
        <div className="bg-white rounded-xl p-6 shadow text-center">
          <h2 className="text-2xl font-bold mb-2">
            Part of a Global Karate Family
          </h2>
          <p className="text-gray-700 mb-2">
            Our dojo is part of an international karate organization, so you’ll
            be learning skills recognized all over the world.
          </p>
          <p className="text-gray-700">
            We even host special events and guest instructors from around the
            globe!
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-4">Ready to Give It a Try?</h2>
        <p className="text-lg text-gray-700 mb-6">
          There’s no better time to start than now. Come see what karate can do
          for you—your first class is free!
        </p>
        <a
          href="/contact"
          className="inline-block bg-black hover:bg-[#b81a25] text-white font-semibold px-8 py-3 rounded-full shadow transition"
        >
          Contact Us &rarr;
        </a>
      </section>
    </div>
  );
}
