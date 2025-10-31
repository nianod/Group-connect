import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  name: string;
  email: string;
  role: string;
  bio: string;
  avatar: string | null;
}

const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/user/123"); // replace with actual user ID
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default ProfilePage;
