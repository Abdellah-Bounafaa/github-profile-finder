import Loading from "../../Loading/Loading";
import AllUsers from "../AllUsers";
import "../User/UserInfo.css";
import Activity from "./Pages/Activity";
import Repos from "./Pages/Repos";
export default function Tabs({ type, setType, tabs, setTabs }) {
  return (
    <>
      <ul>
        <li>
          <button
            onClick={() => {
              setType("repos");
            }}
            className={`${type === "repos" && "text-primary"} `}
          >
            Repositories
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setType("received_events");
            }}
            className={`${type === "received_events" && "text-primary"}`}
          >
            Activity
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setType("followers");
            }}
            className={`${type === "followers" && "text-primary"}`}
          >
            Followers
          </button>
        </li>
      </ul>

      {type === "repos" && (
        <div>{<Repos repos={tabs} setTabs={setTabs} />}</div>
      )}
      {type === "followers" && (
        <div>
          <AllUsers users={tabs} />
        </div>
      )}
      {type === "received_events" && (
        <div>
          <Activity activities={tabs} setTabs={setTabs} />
        </div>
      )}
    </>
  );
}
