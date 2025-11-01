import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  name: string;
  email: string;
}

const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // ✅ get the token from localStorage (assuming you saved it during login)
        const token = localStorage.getItem("token");
        console.log("Token is=", token)

        if (!token) {
          console.error("No token found. Please log in again.");
          return;
        }

        // ✅ send request with token as query param
        const res = await axios.get(`http://127.0.0.1:8000/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUser(res.data.user);
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (!user) return <p>No user found.</p>;

  return (
    <div className="p-4 mt-30">
      <h2>Hello </h2>
      <h1 className="text-xl font-semibold">{user.name}</h1>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
};

export default ProfilePage;
