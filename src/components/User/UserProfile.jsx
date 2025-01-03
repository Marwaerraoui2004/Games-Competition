import React, { useEffect, useState } from 'react';
import { fetchUserById } from '../../services/api'; 

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const data = await fetchUserById(userId);
      setUser(data);
    };
    getUser();
  }, [userId]);

  return (
    <div>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
