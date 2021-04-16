import React from "react";
import ReactTimeAgo from "react-time-ago";
import ReactMarkdown from "react-markdown";
import Loading from "../../components/Loading/Loading";
import Comments from "../Comments/Comments";
import { fetchIssue } from "../../utils/api";
import { useParams, useHistory } from "react-router-dom";

export default function Details() {
  const [error, setError] = React.useState(null);
  const history = useHistory();
  const { full, name, number } = useParams();
  const [issue, setIssue] = React.useState(null);
  React.useEffect(() => {
    fetchIssue(full, name, number)
      .then((res) => {
        setIssue(res.data);
      })
      .catch((err) => setError(err));
  }, []);
  return (
    <>
      {error ? (
        <ul className="max-w-7xl mx-auto p-3">
          <li className="block bg-red-50">
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center">
                <h1 className="text-sm font-medium text-red-600">
                  Something went wrong! Please try again.{" "}
                  <button
                    onClick={() => history.goBack()}
                    className=" text-sm font-medium text-blue-500 hover:text-blue-700"
                  >
                    Back
                  </button>
                </h1>
              </div>
            </div>
          </li>
        </ul>
      ) : issue !== null ? (
        <>
          <div className="max-w-7xl mx-auto p-3 border-b border-gray-200 pb-5">
            <button
              onClick={() => history.goBack()}
              className="flex items-center text-sm font-medium text-blue-500 hover:text-blue-700"
            >
              <svg
                className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-blue-400"
                x-description="Heroicon name: solid/chevron-left"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Back
            </button>
            <div className="">
              <h1 className="text-3xl leading-6 font-medium text-gray-900">
                {issue.title}
                <span className="font-light">#{issue.number}</span>
              </h1>
            </div>
            <div className="mt-2 p-3">
              <div className="flex justify-between">
                <div className="flex">
                  <button
                    disabled
                    className="rounded-full px-5 py-2 font-bold text-green-800 bg-green-200"
                  >
                    {issue.state}
                  </button>
                  <div className="flex items-center mx-1 text-sm text-gray-500">
                    <a
                      target="_blank"
                      className="hover:text-blue-500 font-bold"
                      href={issue.user.html_url}
                      rel="noreferrer"
                    >
                      {issue.user.login}
                    </a>
                  </div>
                  <div className="flex items-center mx-1 text-sm text-gray-500">
                    <span>
                      opened this issue{" "}
                      <ReactTimeAgo
                        date={Date.parse(issue.created_at)}
                        locale="en-US"
                      />
                    </span>
                  </div>
                  <div className="flex items-center mx-1 text-sm text-gray-500">
                    {issue.comments} comments
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="max-w-none mx-auto">
              <div className="bg-white overflow-hidden sm:rounded-lg sm:shadow">
                <div className="bg-gray-200 px-4 py-5 sm:px-6">
                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={issue.user.avatar_url}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        <a href="/" className="hover:underline">
                          {issue.user.login}
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">
                        <a href="/" className="hover:underline">
                          commented on{" "}
                          <ReactTimeAgo
                            date={Date.parse(issue.created_at)}
                            locale="en-US"
                          />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-4 pb-5 sm:p-6 sm:pt-0">
                  <ReactMarkdown>{issue.body}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
          <div>
            {issue.comments > 0 ? (
              <>
                <h1 className="text-center font-bold text-4xl my-4">
                  Comments
                </h1>
                <Comments issue_number={issue.number} full={full} name={name} />
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
