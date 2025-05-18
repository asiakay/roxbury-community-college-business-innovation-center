import axios from 'axios';

// Fallback data for when Strapi is unavailable
const fallbackEvents = [
  {
    id: 1,
    attributes: {
      title: "Business Plan Workshop",
      date: "2024-04-15",
      time: "10:00 AM - 12:00 PM",
      location: "BIC Conference Room A",
      category: "Workshop",
      description: "Learn how to create a comprehensive business plan that will help you secure funding and guide your business growth.",
      capacity: 20,
      spots_left: 8
    }
  },
  {
    id: 2,
    attributes: {
      title: "Networking Mixer",
      date: "2024-04-20",
      time: "5:30 PM - 7:30 PM",
      location: "BIC Main Hall",
      category: "Networking",
      description: "Connect with fellow entrepreneurs and business leaders in a casual setting. Light refreshments will be served.",
      capacity: 50,
      spots_left: 15
    }
  },
  {
    id: 3,
    attributes: {
      title: "Digital Marketing Seminar",
      date: "2024-04-25",
      time: "2:00 PM - 4:00 PM",
      location: "BIC Training Room",
      category: "Seminar",
      description: "Master the essentials of digital marketing, including social media strategy, content creation, and SEO basics.",
      capacity: 30,
      spots_left: 12
    }
  }
];

const strapiClient = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
  },
  timeout: 5000 // Add timeout to prevent long loading times
});

export const fetchEvents = async () => {
  try {
    const response = await strapiClient.get('/api/events?populate=*');
    return response.data.data;
  } catch (error) {
    console.warn('Using fallback events data:', error);
    return fallbackEvents;
  }
};

export const fetchSuccessStories = async () => {
  try {
    const response = await strapiClient.get('/api/success-stories?populate=*');
    return response.data.data;
  } catch (error) {
    console.warn('Error fetching success stories:', error);
    return [];
  }
};

export const submitContactForm = async (formData: any) => {
  try {
    const response = await strapiClient.post('/api/contact-submissions', {
      data: formData,
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    // Store form data locally or show a message to contact via email
    throw new Error('Unable to submit form. Please try again later or contact us directly at bic@rcc.edu');
  }
};