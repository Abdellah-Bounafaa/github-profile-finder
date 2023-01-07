import { useEffect, useRef, useState } from "react";
import Axios from "../../data/Axios";
import Loading from "../Loading/Loading";
import AllUsers from "./AllUsers";
import "./Users.css";
export default function Users() {
  const searched_username = useRef("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  const searchByName = async () => {
    setLoading(true);
    if (searched_username.current.value !== "") {
      const res = await Axios.get(`/users/${searched_username.current.value}`);

      setUsers(() => [res.data]);
    } else {
      getAllUsers();
    }
    setLoading(null);
  };

  async function getAllUsers() {
    if (searched_username.current.value === "") {
      setLoading(true);
      const res = await Axios.get("/users");
      const data = await res.data;
      setUsers(data);
      setLoading(null);
    }
  }
  useEffect(() => {
    getAllUsers();
  }, [setUsers]);
  console.log(users);
  return (
    <>
      <div className="users-container">
        <div className="text">
          <form
            className="row g-3"
            onSubmit={(e) => {
              e.preventDefault();
              e.target.reset();
            }}
          >
            <div className="col-auto">
              <label htmlFor="search" className="visually-hidden">
                Search by name...
              </label>
              <input
                ref={searched_username}
                type="text"
                className="form-control input"
                id="search"
                placeholder="  Search by name..."
              />
            </div>
            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-primary mb-2"
                onClick={() => {
                  searchByName();
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>{" "}
      {loading ? <Loading /> : <AllUsers users={users} />}
    </>
  );
}
