import React from 'react';
import { Clock, MapPin, User, Coffee, Presentation, Award, Users, Lightbulb, Film } from 'lucide-react';

const scheduleData = [
  {
    day: "March 15, 2025",
    events: [
      {
        time: "09:00 – 10:00",
        title: "Registration & Networking Breakfast",
        description: "Check-in, welcome breakfast and networking with fellow researchers",
        location: "Main Lobby & Dining Hall",
        type: "registration",
        icon: Coffee,
        id: "1"
      },
      {
        time: "10:00 – 10:15",
        title: "Inauguration & Opening Remarks",
        description: "Official opening ceremony and welcome address",
        location: "Main Auditorium",
        type: "ceremony",
        icon: Presentation,
        id: "2"
      },
      {
        time: "10:15 – 10:30",
        title: "IIIT-Delhi R&D and Innovation Highlights",
        description: "Showcase of IIIT Delhi's research achievements and innovation ecosystem",
        location: "Main Auditorium",
        type: "presentation",
        icon: Lightbulb,
        id: "3"
      },
      {
        time: "10:30 – 11:15",
        title: "Keynote Talks",
        description: "Two inspiring keynote presentations from industry leaders",
        location: "Main Auditorium",
        type: "keynote",
        icon: User,
        id: "4-5",
        speaker: "Jaswinder Chadha & Mr Anku Jain"
      },
      {
        time: "11:15 – 11:30",
        title: "Tea Break",
        description: "Networking break with refreshments",
        location: "Exhibition Hall",
        type: "break",
        icon: Coffee,
        id: "6"
      },
      {
        time: "11:30 – 13:00",
        title: "Flash Talks – 20 Presentations",
        description: "Rapid-fire research presentations showcasing cutting-edge work",
        location: "Main Auditorium",
        type: "presentation",
        icon: Presentation,
        id: "7"
      },
      {
        time: "13:00 – 14:00",
        title: "Lunch & Networking Break",
        description: "Networking lunch with industry partners and researchers",
        location: "Dining Hall",
        type: "break",
        icon: Coffee,
        id: "8"
      },
      {
        time: "14:00 – 15:30",
        title: "Parallel Sessions",
        description: "Multiple concurrent sessions across different venues",
        location: "Multiple Venues",
        type: "parallel",
        icon: Users,
        id: "9A-9D",
        sessions: [
          "9A: Poster Showcase (20 Selected) & Product Demos (10 Selected)",
          "9B: Startup Showcase (10 Startups) and Incubation Visit (IHUB+EP+IC)",
          "9C: Panel Discussion/Influencer Talk",
          "9D: Closed Room Round Table"
        ]
      },
      {
        time: "15:30 – 17:00",
        title: "Research Tank",
        description: "Pitch session featuring 10-15 innovative research ideas",
        location: "Main Auditorium",
        type: "pitch",
        icon: Lightbulb,
        id: "10"
      },
      {
        time: "17:00 – 17:30",
        title: "Tea Break",
        description: "Final networking break of the day",
        location: "Exhibition Hall",
        type: "break",
        icon: Coffee,
        id: "11"
      },
      {
        time: "17:30 – 18:30",
        title: "Awards Ceremony and Closing",
        description: "Recognition of outstanding contributions and closing remarks",
        location: "Main Auditorium",
        type: "awards",
        icon: Award,
        id: "12"
      },
      {
        time: "19:00 Onwards",
        title: "Movie Screening & Dinner",
        description: "Evening entertainment with movie screening followed by dinner",
        location: "Auditorium & Dining Hall",
        type: "social",
        icon: Film,
        id: "13"
      }
    ]
  }
];

const getEventTypeColor = (type: string) => {
  switch (type) {
    case 'keynote':
      return 'bg-green-600 border-green-600';
    case 'presentation':
      return 'bg-blue-600 border-blue-600';
    case 'parallel':
      return 'bg-purple-600 border-purple-600';
    case 'pitch':
      return 'bg-orange-600 border-orange-600';
    case 'awards':
      return 'bg-yellow-600 border-yellow-600';
    case 'ceremony':
      return 'bg-red-600 border-red-600';
    case 'social':
      return 'bg-indigo-600 border-indigo-600';
    case 'break':
      return 'bg-gray-500 border-gray-500';
    default:
      return 'bg-green-600 border-green-600';
  }
};

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            Event Schedule
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A full day of research presentations, networking, and innovation showcase
          </p>
        </div>

        <div className="space-y-16">
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex} className="relative">
              {/* Day Header */}
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {day.day}
                </h3>
                <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-green-200"></div>

                {/* Events */}
                <div className="space-y-8">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className={`relative flex items-start ${
                        eventIndex % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Timeline Dot */}
                      <div className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 ${getEventTypeColor(event.type)} z-10`}></div>

                      {/* Event Card */}
                      <div className={`ml-12 md:ml-0 md:w-1/2 ${
                        eventIndex % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                      }`}>
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:scale-105">
                          {/* Time Badge and ID */}
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${getEventTypeColor(event.type)}`}>
                                <event.icon className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                                {event.time}
                              </span>
                            </div>
                            <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">
                              #{event.id}
                            </span>
                          </div>

                          {/* Event Details */}
                          <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                            {event.title}
                          </h4>
                          <p className="text-gray-600 mb-3 leading-relaxed">
                            {event.description}
                          </p>

                          {/* Parallel Sessions */}
                          {event.sessions && (
                            <div className="mb-3">
                              <h5 className="text-sm font-semibold text-gray-700 mb-2">Parallel Sessions:</h5>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {event.sessions.map((session, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                    {session}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Location */}
                          <div className="flex items-center text-gray-500 mb-2">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm">{event.location}</span>
                          </div>

                          {/* Speaker */}
                          {event.speaker && (
                            <div className="flex items-center text-gray-700">
                              <User className="w-4 h-4 mr-2" />
                              <span className="text-sm font-medium">{event.speaker}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Spacer for desktop */}
                      <div className="hidden md:block md:w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't Miss Out!
            </h3>
            <p className="text-gray-600 mb-6">
              Register now to secure your spot at RIISE 2025 and be part of India's premier research showcase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105">
                Register Now
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105">
                Download Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;