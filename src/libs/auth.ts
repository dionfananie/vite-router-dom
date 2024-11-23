import type { User } from "../types/auth";
import { accessToken } from "./access-cookies";

const API_URL = "https://amazingsafari-backend.haidar.dev";

export const loginUser = async () => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ username: "user-test", password: "123456789" }),
      headers: { "Content-Type": "application/json" },
    });

    const data: { token?: string; user?: User } = await response.json();
    if (!data.token) return null;
    accessToken.set(data.token);
  } catch (error) {
    console.error(error);
  }
};

export const checkUser = async () => {
  const token = accessToken.get();

  if (token) {
    try {
      const response = await fetch(`${API_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
};
