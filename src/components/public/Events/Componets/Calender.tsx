import React, { useEffect, useState } from "react";
import { EventType } from "../Events";

export default function Calendar() {
  const [events, setEvents] = useState<EventType[]>([]);

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  useEffect(() => {
    fetch("/events/Events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const CalendarEvents = events
    .map((e) => ({ ...e, dateObj: new Date(e.date) }))
    .filter((e) => e.dateObj >= now)
    .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

  // Get event days for this month
  const eventDays = CalendarEvents.filter(
    (e) => e.dateObj.getMonth() === month && e.dateObj.getFullYear() === year
  ).map((e) => {
    return {
      date: e.dateObj.getDate(),
      event: e.isEvent,
    };
  });

  const weeks: (number | null)[][] = [];
  let week: (number | null)[] = Array(firstDay).fill(null);

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length) weeks.push(week);

  const getEventStyle = (day: number | null) => {
    const event = eventDays.find((e) => e.date === day);
    console.log(event);
    if (event) {
      if (event.event) {
        return "bg-[#de1e2c] text-white font-bold";
      }
      return "bg-black text-white font-bold";
    }
    return "text-gray-800";
  };
  return (
    <div className="bg-white rounded-xl shadow p-4 mt-6">
      <div className="text-center font-bold mb-2">
        {now.toLocaleString("default", { month: "long" })} {year}
      </div>
      <div className="grid grid-cols-7 gap-1 text-xs text-gray-700 mb-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="font-semibold text-center">
            {d}
          </div>
        ))}
      </div>
      {weeks.map((week, i) => (
        <div key={i} className="grid grid-cols-7 gap-1">
          {week.map((day, j) =>
            day ? (
              <div
                key={j}
                className={`text-center rounded-full py-1 ${getEventStyle(
                  day
                )}`}
              >
                {day}
              </div>
            ) : (
              <div key={j}></div>
            )
          )}
        </div>
      ))}
      <div className="mt-2 text-xs text-gray-500 text-center flex flex-row justify-center gap-4">
        <div>
          <span className="inline-block w-3 h-3 bg-[#de1e2c] rounded-full mr-1 align-middle"></span>
          Upcoming event
        </div>
        <div>
          <span className="inline-block w-3 h-3 bg-black rounded-full mr-1 align-middle"></span>
          Karate closed
        </div>
      </div>
    </div>
  );
}
