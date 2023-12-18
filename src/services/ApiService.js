import axios from 'axios';

// const apiUrl = process.env.VUE_APP_API_URL; 
const apiUrl = 'http://localhost:4000/api'; 

export default {
  login: async (username, password) => {
    try {
      const response = await axios.post(`${apiUrl}/login`, { username, password });
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  },
};
