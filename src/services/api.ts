import axios from 'axios';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface NewsletterData {
  email: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

export const api = {
  // Contact form submission
  submitContactForm: async (data: ContactFormData) => {
    try {
      // For now, we'll simulate an API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In production, you would make an actual API call:
      // const response = await axios.post(`${API_BASE_URL}/contact`, data);
      // return response.data;
      
      return {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      };
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw new Error('Failed to submit contact form. Please try again later.');
    }
  },

  // Newsletter subscription
  subscribeNewsletter: async (data: NewsletterData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In production:
      // const response = await axios.post(`${API_BASE_URL}/newsletter/subscribe`, data);
      // return response.data;
      
      return {
        success: true,
        message: 'Successfully subscribed to our newsletter!',
      };
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      throw new Error('Failed to subscribe to newsletter. Please try again later.');
    }
  },

  // Property inquiry
  submitPropertyInquiry: async (propertyId: number, data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In production:
      // const response = await axios.post(`${API_BASE_URL}/properties/${propertyId}/inquire`, data);
      // return response.data;
      
      return {
        success: true,
        message: 'Thank you for your interest! Our agent will contact you shortly.',
      };
    } catch (error) {
      console.error('Error submitting property inquiry:', error);
      throw new Error('Failed to submit inquiry. Please try again later.');
    }
  }
};
