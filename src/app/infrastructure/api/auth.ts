import axios from "axios";
import {
  APIAuthRequest,
  APIAuthResponse,
  APIAuthRegisterRequest,
} from "@/app/types";

export type User = {
  id: string;
  username: string;
  email: string;
};

export const signInAPI = async (
  data: APIAuthRequest,
): Promise<APIAuthResponse> => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/auth/login`,
    data,
    {
      withCredentials: true,
    },
  );
  return response.data;
};

export const registerAPI = async (
  data: APIAuthRegisterRequest,
): Promise<APIAuthResponse> => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/auth/register`,
    data,
    {
      withCredentials: true,
    },
  );
  return response.data;
};
