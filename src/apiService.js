import axios from 'axios';

const BASE_URL = 'http://65.2.31.243:3000';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signUp = async userData => {
  try {
    const response = apiClient.post('/user/signUp', userData);
    return (await response).data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async credentials => {
  try {
    const respone = apiClient.post('/user/signIn', credentials);
    return (await respone).data;
  } catch (error) {
    throw error.respone.data;
  }
};

export const verifyOtp = async verifyDetails => {
  try {
    const response = apiClient.post('/verifyOtp', verifyDetails);
    return (await response).data;
  } catch (error) {
    console.log(error);
    throw error.respone.data;
  }
};
