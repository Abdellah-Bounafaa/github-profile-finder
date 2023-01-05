import axios from "./data/Data";
import { useEffect, useState } from "react";
import "./App.css";
import Account from "./components/Account";
function App() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState("");
  const handleName = (e) => {
    setUsername(e.target.value);
  };
  const result = document.querySelector(".result");
  const getProfile = async () => {
    try {
      const res = await axios.get(`users/${username}`);
      setProfile(res.data);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            handleName(e);
          }}
        />
        <button
          onClick={() => {
            getProfile();
            setProfile([]);
          }}
          className="btn btn-primary p-2"
        >
          Search
        </button>
      </div>

      <Account profile={profile} />
    </div>
  );
}

export default App;
