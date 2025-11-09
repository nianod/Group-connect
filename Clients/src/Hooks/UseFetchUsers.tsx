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
        //console.log("Token is=", token);

        if (!token) {
          setError("No token found. Please log in again.");
          setLoading(false);
          return;
        }

        const res = await axios.get("https://maingrbackend-9e0d3a1edb04.herokuapp.com/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data.user);
       // console.log("your data is.", res.data.user)
      } catch (err: any) {
        console.error("Error fetching profile:", err);
        setError("Failed to fetch profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error, setUser }; 
};