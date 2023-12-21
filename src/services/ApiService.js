import axios from 'axios';

const apiUrl = process.env.VUE_APP_API_URL; 

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

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

  getUsers: async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      return response.data;
    } catch (error) {
      console.error('Error getting users:', error);
      throw error;
    }
  },

  registerUser: async (userData) => {
    try {
      const response = await axios.post(`${apiUrl}/users`, userData);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  },
  
  updateUser: async (user) => {
    try {
      const response = await axios.put(`${apiUrl}/users/${user.id}`, user);
      return response.data;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  deleteUser: async (userId) => {
    try {
      const response = await axios.delete(`${apiUrl}/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  },
};
