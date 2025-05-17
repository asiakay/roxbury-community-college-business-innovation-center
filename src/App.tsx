import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import EventsSection from './components/EventsSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "RCC Business Innovation Center";
    
    // Update favicon if needed
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = "/favicon.ico";
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <EventsSection />
        <SuccessStoriesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;