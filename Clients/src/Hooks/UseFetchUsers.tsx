import { useEffect, useState } from "react";
import axios from "axios";

export interface User {
  name: string;
  email: string;
  role?: string;
  university?: string;
  bio?: string;
  avatar?: string | null;
}

export const useFetchUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("Token is=", token);

        if (!token) {
          setError("No token found. Please log in again.");
          setLoading(false);
          return;
        }

        const res = await axios.get("http://127.0.0.1:8000/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data.user);
      } catch (err: any) {
        console.error("Error fetching profile:", err);
        setError("Failed to fetch profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error, setUser }; // Added setUser to return
};