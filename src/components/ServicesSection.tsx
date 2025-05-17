import React from 'react';
import { Monitor, BookOpen, Users, BarChart3, GraduationCap, Building2 } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-100">
      <div className="p-3 bg-blue-100 text-blue-800 rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'workstations',
      title: 'Workstations & Meeting Space',
      description: 'Access to seven dedicated workstations where resident businesses can convene, work, and hold meetings in a professional environment.',
      icon: <Monitor className="h-6 w-6" />,
    },
    {
      id: 'workshops',
      title: 'Workshops & Training',
      description: 'Specialized workshops and training sessions designed to help entrepreneurs strengthen their businesses, including assistance with business plans and funding.',
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      id: 'mentorship',
      title: 'Mentorship & Networking',
      description: 'Connect with experienced mentors and expand your professional network through our partnerships with established business leaders and organizations.',
      icon: <Users className="h-6 w-6" />,
    },
    {
      id: 'growth-industries',
      title: 'High-Growth Industries Focus',
      description: 'Special initiatives tied to high-growth industries such as green technology and energy, aligned with existing strong programming at RCC.',
      icon: <BarChart3 className="h-6 w-6" />,
    },
    {
      id: 'resources',
      title: 'Access to Resources',
      description: 'Increased access to capital, information, and networks that are crucial for new entrepreneurs to successfully launch and grow their ventures.',
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      id: 'partnerships',
      title: 'Strategic Partnerships',
      description: 'Collaboration with partners to provide comprehensive support, fostering a collaborative environment for entrepreneurial success.',
      icon: <Building2 className="h-6 w-6" />,
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-800 tracking-wide uppercase">Our Services</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Support for Entrepreneurs
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            The Business Innovation Center offers a wide range of services designed to help entrepreneurs at every stage of their journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div id={service.id} key={service.id}>
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;