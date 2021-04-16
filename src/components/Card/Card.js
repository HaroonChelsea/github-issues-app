import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
Card.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default function Card(props) {
  const dispatch = useDispatch();
  const { full_name, owner, stargazers_count, forks, open_issues } = props.repo;
  const { login, avatar_url } = owner;
  return (
    <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
      <Link
        onClick={() => dispatch({ type: "LOL" })}
        to={`/${full_name}/issues/`}
        className="flex-1 flex flex-col p-8"
      >
        <img
          className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded"
          src={avatar_url}
          alt={`Avatar of ${login}`}
        />
        <h3 className="mt-6 text-gray-900 text-xl font-bold">{login}</h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Stars</dt>
          <dd className="text-gray-500 text-sm">
            {stargazers_count.toLocaleString()} Stars
          </dd>
          <dt className="sr-only">Forks</dt>
          <dd className="text-gray-500 text-sm">
            {forks.toLocaleString()} Forks
          </dd>
          <dt className="sr-only">Issues</dt>
          <dd className="text-gray-500 text-sm">
            {open_issues.toLocaleString()} Open Issues
          </dd>
        </dl>
      </Link>
    </li>
  );
}
