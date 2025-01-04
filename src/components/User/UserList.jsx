import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Erreur:', error));
  }, []);

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
