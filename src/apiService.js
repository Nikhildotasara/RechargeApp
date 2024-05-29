import axios from 'axios';

const BASE_URL = 'http://65.2.31.243:3000';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const header = {
  'Content-Type': 'application/json',
};

export const updatePassword = async updatedDetails => {
  try {
    const response = apiClient.post('/user/update-password', updatedDetails);
    return (await response).data;
  } catch (error) {
    console.error(error);
    throw error.respone.data;
  }
};

export const sendOtp = async details => {
  try {
    const response = await fetch(BASE_URL + '/sendotp', {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        email: details.email,
      }),
    });
    // console.log(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    // throw error.response.data;
  }
};

export const verifyOtp = async details => {
  try {
    const response = await fetch(BASE_URL + '/verifyotp', {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        email: details.email,
        otp: details.otp,
      }),
    });
    // console.log(response);
    const data = await response.json();
    data.status = response.status;
    return data;
  } catch (error) {
    console.log(error);
    // throw error.response.data;
  }
};
export const signUp = async details => {
  try {
    const response = await fetch(BASE_URL + '/user/signup', {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        UserName: details.UserName,
        Email: details.Email,
        Pass: details.Pass,
        MobileNo: details.MobileNo,
      }),
    });
    // console.log(response);
    const data = await response.json();
    // console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    // throw error.response.data;
  }
};

export const login = async details => {
  try {
    const response = await fetch(BASE_URL + '/user/login', {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        email: details.email,
        password: details.password,
      }),
    });
    // console.log(response);
    const data = await response.json();
    // console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    // throw error.response.data;
  }
};
