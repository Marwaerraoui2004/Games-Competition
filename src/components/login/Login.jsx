import axios from "axios";
import { useState } from "react";
import GameList from "../Game/GameList";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  // Added password field
  const [role, setRole] = useState("en_attente");  // Default to 'Admin' (you can adjust this if necessary)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [envoi, setEnvoi] = useState(false);
  const url = "http://127.0.0.1:8000/api/users";

  const envoyer = async () => {
    setEnvoi(true);
    try {
      const response = await axios.post(url, { name, email, password, role });  // Include password
      console.log("Réponse serveur :", response.data);

      const token = response.data.token;
      localStorage.setItem("token", token);

      setIsLoggedIn(true);
    } catch (error) {
      console.error("Erreur de connexion :", error);
      setIsLoggedIn(false);
    } finally {
      setEnvoi(false);
    }
  };

  return (
    <form>
      {envoi ? (
        <div>Loading...</div>
      ) : isLoggedIn ? (
        <GameList />
      ) : (
        <div className="login-form">
          <h1 className="titree">Login</h1>
          <input
            type="text"
            className="input-field"
            placeholder="Entrez votre Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="input-field"
            placeholder="Entrez votre Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input-field"
            placeholder="Entrez votre Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="en_attente">Admin</option>
            <option value="accepté">Participant</option>
          </select>

          <button className="login-button" type="button" onClick={envoyer}>
            Valider
          </button>
        </div>
      )}
    </form>
  );
}
