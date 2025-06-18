import { useEffect, useState } from "react";
import Calendar from "./Componets/Calender";

export default function Event() {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    fetch("/events/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  // const events = [
  //   {
  //     title: "Beginner's Workshop",
  //     date: "2025-07-20",
  //     time: "10:00 AM",
  //     location: "Fichardtpark Sport Centre",
  //     description:
  //       "A special class for new members and anyone interested in trying karate for the first time. Open to all ages 6+.",
  //   },
  //   {
  //     title: "Annual Dojo Tournament",
  //     date: "2025-09-14",
  //     time: "09:00 AM",
  //     location: "Fichardtpark Sport Centre",
  //     description:
  //       "A friendly in-house competition for all students. Great for building confidence and having fun!",
  //   },
  //   {
  //     title: "International Guest Seminar",
  //     date: "2025-11-08",
  //     time: "11:00 AM",
  //     location: "Fichardtpark Sport Centre",
  //     description:
  //       "Train with a visiting instructor from the International Okinawan Goju Ryu Karate-do Federation. Open to all members.",
  //   },
  //   {
  //     title: "End of Year Grading",
  //     date: "2025-12-05",
  //     time: "05:00 PM",
  //     location: "Fichardtpark Sport Centre",
  //     description:
  //       "Final grading for the year. All students are encouraged to participate.",
  //   },
  //   {
  //     title: "Holiday Social",
  //     date: "2025-12-15",
  //     time: "06:00 PM",
  //     location: "Fichardtpark Sport Centre",
  //     description:
  //       "Celebrate the year with your karate family! Food, fun, and awards.",
  //   },
  // ];

  const today = new Date();
  const sortedEvents = events
    .map((e) => ({ ...e, dateObj: new Date(e.date) }))
    .filter((e) => e.dateObj >= today && e.isEvent)
    .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

  const CalendarEvents = events
    .map((e) => ({ ...e, dateObj: new Date(e.date) }))
    .filter((e) => e.dateObj >= today)
    .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

  const nextEvent = sortedEvents[0];
  const nextFour = sortedEvents.slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-black">
      <h1 className="font-impact text-4xl md:text-5xl font-bold mb-8 text-center">
        Events
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Right Side: Next Event Details */}
        <div className="flex-1">
          <section className="bg-[#FBF7EF] rounded-xl shadow p-8 h-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-[#de1e2c]">
              Next Event
            </h2>
            {nextEvent ? (
              <>
                <div className="text-2xl font-semibold mb-2">
                  {nextEvent.title}
                </div>
                <div className="mb-2 text-gray-700">
                  <span className="font-semibold">Date:</span>{" "}
                  {new Date(nextEvent.date).toDateString()}
                </div>
                <div className="mb-2 text-gray-700">
                  <span className="font-semibold">Time:</span> {nextEvent.time}
                </div>
                <div className="mb-2 text-gray-700">
                  <span className="font-semibold">Location:</span>{" "}
                  {nextEvent.location}
                </div>
                <div className="mb-4 text-gray-800">
                  {nextEvent.description}
                </div>
                {/* <a
                  href="/contact"
                  className="inline-block bg-black hover:bg-[#de1e2c] text-white font-semibold px-6 py-2 rounded-full shadow transition"
                >
                  RSVP / More Info
                </a> */}
              </>
            ) : (
              <div className="text-gray-700">No upcoming events.</div>
            )}
          </section>
        </div>
        {/* Left Side: Next 4 Events & Calendar */}
        <div className="flex-1 flex flex-col gap-6">
          <section className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4 text-[#de1e2c]">
              Upcoming Events
            </h2>
            <ul>
              {nextFour.map((event, idx) => (
                <li
                  key={idx}
                  className="mb-4 border-b last:border-b-0 pb-3 last:pb-0"
                >
                  <div className="font-semibold">{event.title}</div>
                  <div className="text-gray-600 text-sm">
                    {new Date(event.date).toDateString()} &middot; {event.time}
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <div className="flex-1">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}

export interface EventType {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  isEvent: boolean;
};
