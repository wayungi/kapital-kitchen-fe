import { UserData, Credentials } from "../../custom";

const BASE_URL = "http://127.0.0.1:3000";
const postHeader = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const getHeader = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

export const userRegister = async (userData: UserData) => {
  // using try catch
  try {
    await fetch(`${BASE_URL}/register`, {
      ...postHeader,
      body: JSON.stringify(userData),
    });
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (userCredentials: Credentials) => {
  const response = await fetch(`${BASE_URL}/login`, {
    ...postHeader,
    body: JSON.stringify(userCredentials),
  });
  if (!response) console.log("more learning");
  const accessToken = await response.json();
  console.log(accessToken);
  return accessToken;
};

export const userLogout = async () => {
    try {
        await fetch(`${BASE_URL}/logout`, {...getHeader })
    }catch(err) {
        console.log(err)
    }
}
