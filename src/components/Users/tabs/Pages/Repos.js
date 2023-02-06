export default function Repos({ repos }) {
  return (
    <div className="repo-container">
      {repos.map((repo, index) => (
        <div className="repo" key={index}>
          <div className="header">
            {" "}
            <a href={repo?.html_url}>{repo.name}</a>
            <p className="visibility">{repo.visibility}</p>
          </div>

          <p>{repo.language}</p>
        </div>
      ))}
    </div>
  );
}
