import { format } from "timeago.js";
import "./Activity.css";
export default function Activity({ activities }) {
  return (
    <div className="activities">
      {activities.map((activity) => (
        <div className="action">
          <div className="actor-avatar">
            <img src={activity?.actor?.avatar_url} alt="" />
          </div>
          <div className="action-inf">
            <h5 className="login">{activity?.actor?.login}</h5>
            <span className="repo-inf">{activity?.repo?.name}</span>{" "}
            <span className="event">{activity?.type}</span>
            <p className="created_at">{format(activity?.created_at)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
