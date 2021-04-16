import React from "react";
import PropTypes from "prop-types";
import ReactTimeAgo from "react-time-ago";
import ReactMarkdown from "react-markdown";
import Loading from "../../components/Loading/Loading";
import { fetchComments } from "../../utils/api";

Comments.propTypes = {
  full: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  issue_number: PropTypes.number.isRequired,
};

export default function Comments({ full, name, issue_number }) {
  const [error, setError] = React.useState(null);
  const [comments, setComments] = React.useState(null);
  React.useEffect(() => {
    fetchComments(full, name, issue_number)
      .then((res) => {
        setComments(res);
      })
      .catch((err) => setError(err));
  }, []);
  return (
    <>
      <div>
        {error ? (
          <ul className="max-w-7xl mx-auto p-3">
            <li className="block bg-red-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center">
                  <h1 className="text-sm font-medium text-red-600">
                    Something went wrong! Please try again.
                  </h1>
                </div>
              </div>
            </li>
          </ul>
        ) : comments ? (
          comments.map((comment) => {
            return (
              <div
                key={comment.id}
                className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"
              >
                <div className="max-w-none mx-auto">
                  <div className="bg-white overflow-hidden sm:rounded-lg sm:shadow">
                    <div className="bg-gray-200 px-4 py-5 sm:px-6">
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={comment.user.avatar_url}
                            alt=""
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            <a
                              target="_blank"
                              href={comment.user.html_url}
                              className="hover:underline"
                              rel="noreferrer"
                            >
                              {comment.user.login}
                            </a>
                          </p>
                          <p className="text-sm text-gray-500">
                            <a href="/" className="hover:underline">
                              commented on{" "}
                              <ReactTimeAgo
                                date={Date.parse(comment.created_at)}
                                locale="en-US"
                              />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 pb-5 sm:p-6 sm:pt-0">
                      <ReactMarkdown>{comment.body}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <Loading />
          </div>
        )}
      </div>
    </>
  );
}
