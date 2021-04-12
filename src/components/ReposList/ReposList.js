import Card from "../Card/Card";
import PropTypes from "prop-types";

ReposList.propTypes = {
  repos: PropTypes.array.isRequired,
};
export default function ReposList(props) {
  const repos = props.repos;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {repos && repos.map((repo) => <Card key={repo.id} repo={repo} />)}
      </ul>
    </div>
  );
}
