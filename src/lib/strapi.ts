import axios from 'axios';

const strapiClient = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
  },
});

export const fetchEvents = async () => {
  try {
    const response = await strapiClient.get('/api/events?populate=*');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};

export const fetchSuccessStories = async () => {
  try {
    const response = await strapiClient.get('/api/success-stories?populate=*');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching success stories:', error);
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
    throw error;
  }
};