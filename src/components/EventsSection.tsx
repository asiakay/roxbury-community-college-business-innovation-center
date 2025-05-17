import React, { useState, useEffect } from 'react';
import { CalendarCheck, Clock, MapPin, Users } from 'lucide-react';
import { fetchEvents } from '../lib/strapi';

interface Event {
  id: number;
  attributes: {
    title: string;
    date: string;
    time: string;
    location: string;
    category: string;
    description: string;
    capacity: number;
    spots_left: number;
  };
}

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { attributes: eventData } = event;

  const categoryColors: Record<string, string> = {
    Workshop: 'bg-blue-100 text-blue-800',
    Seminar: 'bg-green-100 text-green-800',
    Networking: 'bg-purple-100 text-purple-800',
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-100">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-900">{eventData.title}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[eventData.category] || 'bg-gray-100 text-gray-800'}`}>
              {eventData.category}
            </span>
          </div>
          <p className="text-gray-600 mb-4 line-clamp-2">{eventData.description}</p>
          <div className="space-y-2 mb-6">
            <div className="flex items-center text-sm text-gray-500">
              <CalendarCheck className="h-4 w-4 mr-2 text-blue-800" />
              {eventData.date}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-2 text-blue-800" />
              {eventData.time}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-2 text-blue-800" />
              {eventData.location}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Users className="h-4 w-4 mr-2 text-blue-800" />
              {eventData.spots_left} spots left
            </div>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition duration-300"
          >
            Learn More & Register
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
              onClick={() => setIsModalOpen(false)}
            ></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-bold text-gray-900" id="modal-title">
                      {eventData.title}
                    </h3>
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 mb-4">{eventData.description}</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <CalendarCheck className="h-4 w-4 mr-2 text-blue-800" />
                          {eventData.date}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-2 text-blue-800" />
                          {eventData.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-2 text-blue-800" />
                          {eventData.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Users className="h-4 w-4 mr-2 text-blue-800" />
                          Capacity: {eventData.capacity} (Only {eventData.spots_left} spots left)
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <p className="text-sm font-medium text-gray-800">Registration Benefits:</p>
                        <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
                          <li>Receive event materials and resources</li>
                          <li>Network with industry professionals</li>
                          <li>Participate in Q&A sessions</li>
                          <li>Follow-up support from BIC advisors</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button 
                  type="button" 
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-800 text-base font-medium text-white hover:bg-blue-900 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Register for Event
                </button>
                <button 
                  type="button" 
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const EventsSection: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvents = async () => {
      const data = await fetchEvents();
      setEvents(data);
      setLoading(false);
    };

    loadEvents();
  }, []);

  if (loading) {
    return (
      <section id="events" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-gray-600">Loading events...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-800 tracking-wide uppercase">Upcoming Events</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Workshops, Seminars & Networking
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Join us for expert-led sessions and connect with fellow entrepreneurs to learn, grow, and succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-white text-blue-800 border border-blue-800 rounded-md hover:bg-blue-50 transition duration-300">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;