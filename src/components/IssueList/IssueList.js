import ReactTimeAgo from "react-time-ago";
import PropTypes from "prop-types";

IssueList.propTypes = {
  totalIssues: PropTypes.string.isRequired,
  issues: PropTypes.array.isRequired,
};

export default function IssueList({ totalIssues, issues }) {
  return (
    <>
      <div className="bg-white px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Total issues: {totalIssues}
        </h3>
      </div>
      <ul className="divide-y divide-gray-200 border border-gray-100 rounded mb-5">
        {issues.length > 0 ? (
          issues.map((issue) => (
            <li key={issue.id} className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center">
                  <div className="text-sm font-medium text-indigo-600 truncate">
                    {issue.title}
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    {issue.labels.map((label) => (
                      <span
                        style={{
                          backgroundColor: "#" + label.color,
                        }}
                        key={label.id}
                        className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                      >
                        <span className="font-medium text-white">
                          {label.name}
                        </span>
                      </span>
                    ))}
                  </div>
                  <div className="ml-auto flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      {issue.comments}
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex justify-between">
                  <div className="flex">
                    <div className="flex items-center mx-1 text-sm text-gray-500">
                      #{issue.number}
                    </div>
                    <div className="flex items-center mx-1 text-sm text-gray-500">
                      <span>
                        opened{" "}
                        <ReactTimeAgo
                          date={Date.parse(issue.created_at)}
                          locale="en-US"
                        />
                      </span>
                    </div>
                    <div className="flex items-center mx-1 text-sm text-gray-500">
                      by {issue.user.login}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li className="block bg-red-50">
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center">
                <h1 className="text-sm font-medium text-red-600">
                  Nothing Found!
                </h1>
              </div>
            </div>
          </li>
        )}
      </ul>
      <ul>
        {issues.map((issue) => {
          <li key={issue.id}>
            {issue.id}
            {/* <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center">
                <div className="text-sm font-medium text-indigo-600 truncate">
                  {issue.title}
                </div>
                <div className="ml-2 flex-shrink-0 flex">
                  {issue.labels &&
                    issue.labels.map((label) => {
                      <span
                        key={label.id}
                        className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                      >
                        <span className="absolute flex-shrink-0 flex items-center justify-center">
                          <span
                            style={{
                              backgroundColor: label.color,
                            }}
                            className="h-1.5 w-1.5 rounded-full"
                            aria-hidden="true"
                          ></span>
                        </span>
                        <span
                          style={{
                            color: label.color,
                          }}
                          className="ml-3.5 font-medium"
                        >
                          {label.name}
                        </span>
                      </span>;
                    })}
                </div>
                
              </div>
              <div className="mt-2 flex justify-between">
                <div className="flex">
                  <div className="flex items-center mx-1 text-sm text-gray-500">
                    #{issue.number}
                  </div>
                  <div className="flex items-center mx-1 text-sm text-gray-500">
                    <span>
                      opened{" "}
                      <ReactTimeAgo date={issue.created_at} locale="en-US" />
                    </span>
                  </div>
                  <div className="flex items-center mx-1 text-sm text-gray-500">
                    by {issue.user.login}
                  </div>
                </div>
              </div>
            </div> */}
          </li>;
        })}
      </ul>
    </>
  );
}
