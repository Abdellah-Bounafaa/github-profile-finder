import "./Account.css";
const Account = (props) => {
  const profile = props.profile;
  return (
    <div className="card">
      <span className="account-avatar">
        <img src={profile.avatar_url || "Error 404"} alt="" />
      </span>
      <div className="account-info">
        <h1>{profile.login || ""}</h1>
        <p>{profile.bio || ""}</p>
        <div className="special-infos">
          <span>{profile.followers || ""} Followers</span>
          <span>{profile.following || ""} Following</span>
          <span>{profile.public_repos || ""} Repos</span>
        </div>
      </div>
    </div>
  );
};
export default Account;
