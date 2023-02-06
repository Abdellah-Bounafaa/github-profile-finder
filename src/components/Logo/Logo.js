import "./Logo.css";
import GithubLogo from "./394187_github_icon.svg";

export default function Logo() {
  return (
    <div className="container">
      <div className="logo">
        <img src={GithubLogo} alt="" />
        <h1>Github</h1>{" "}
      </div>
    </div>
  );
}
