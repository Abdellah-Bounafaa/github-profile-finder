import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "../../../data/Axios";

import "./UserInfo.css";
import Tabs from "../tabs/Tabs";
const UserInfo = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("repos");
  const [user, setUser] = useState([]);
  const params = useParams();
  const [tabs, setTabs] = useState([]);

  const getUserInfo = async () => {
    const res = await Axios.get(`/users/${params.login}`);

    setUser(() => [res.data]);
  };
  const getTabs = async () => {
    const res = await Axios.get(`/users/${params.login}/${type}`);
    setTabs(res.data);
  };
  useEffect(() => {
    getTabs();
    getUserInfo();
  }, [params.login, type]);
  return (
    <div className="user-info">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="btn btn-primary"
      >
        Back
      </button>
      {user &&
        user?.map((userInfo, index) => (
          <div className="user_inforamations" key={index}>
            {" "}
            <div className="user-avatar">
              {" "}
              <img src={userInfo.avatar_url} alt="" />
            </div>
            <div className="user-details">
              <h1>{userInfo.login}</h1>

              <p>
                <span> Name: </span>
                {userInfo?.name}
              </p>
              <p>
                <span> Followers: </span>
                {userInfo.followers.toLocaleString("en-US")}
              </p>
              <p>
                <span> Following: </span>
                {userInfo.following.toLocaleString("en-US")}
              </p>
              <p>
                <span> Joined at :</span>
                {new Date(userInfo.created_at).toLocaleDateString()}{" "}
              </p>
              <button className="btn btn-primary link">
                <a href={userInfo.html_url} target="_blank">
                  Visit
                </a>
              </button>
            </div>
          </div>
        ))}
      <div className="links">
        <Tabs type={type} setType={setType} tabs={tabs} />
      </div>
    </div>
  );
};
export default UserInfo;
