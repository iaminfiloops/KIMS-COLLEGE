// api.ts

import axios from 'axios';

// Accessing the environment variable
const API_URL = import.meta.env.VITE_API_URL;

interface Credentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const Register = async (credentials: Credentials) => {
  try {
    const response = await axios.post(`${API_URL}/register`, credentials);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      const errorMessage = error.response.data.message;
      throw new Error(errorMessage);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

export const Login = async (credentials: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      const errorMessage = error.response.data.message;
      throw new Error(errorMessage);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};
