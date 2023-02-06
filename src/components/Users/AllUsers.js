import { Link } from "react-router-dom";
import "./Users.css";
export default function AllUsers({ users }) {
  return (
    <div className="users-container container">
      {users &&
        users.map(
          (user, index) =>
            user?.login && (
              <div className="user" key={index}>
                <img src={user?.avatar_url} className="avatar_url" alt="" />
                <p className="current-username">{user?.login}</p>
                <p className="current-name">{user?.name}</p>
                <Link to={`users/${user.login}`} className="view-btn">
                  View
                </Link>
              </div>
            )
        )}
    </div>
  );
}
