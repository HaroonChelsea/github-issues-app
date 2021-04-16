import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import parse from "parse-link-header";
import { addIssues, clearIssues } from "../../store/actions/issues";
import { fetchIssues } from "../../utils/api";
import IssueList from "../../components/IssueList/IssueList";
import Loading from "../../components/Loading/Loading";
import ReactPaginate from "react-paginate";

export default function Issues() {
  const [error, setError] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(0);
  const { full, name } = useParams();
  const issues = useSelector((state) => state.issues);
  const dispatch = useDispatch();
  const [pageCount, setPageCount] = React.useState(null);
  const changePage = ({ selected }) => {
    setPageNumber(selected, pageNumber);
  };
  React.useEffect(() => {
    if (!issues["page_" + (+pageNumber + 1)]) {
      fetchIssues(full, name, pageNumber + 1)
        .then((res) => {
          const resp = res.data;
          const lastLink = parse(res.headers.link);
          if (!lastLink) {
            setPageCount(parseInt(1));
          }
          if (!pageCount) {
            setPageCount(parseInt(lastLink.last.page));
          }
          dispatch(addIssues({ full, resp, pageNumber: pageNumber + 1 }));
        })
        .catch((err) => setError(err));
    }
  }, [pageNumber]);
  return (
    <div className="max-w-7xl mx-auto p-3">
      <Link
        to="/"
        onClick={() => dispatch(clearIssues())}
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
      </Link>

      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            {full}/{name}
          </h2>
        </div>
      </div>
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
      ) : issues["page_" + (+pageNumber + 1)] ? (
        <IssueList issues={issues["page_" + (+pageNumber + 1)]} />
      ) : (
        <Loading />
      )}
      <div className="flex justify-center">
        {pageCount && (
          <ReactPaginate
            aria-label="Pagination"
            previousLabel={
              <svg
                className="h-5 w-5"
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
            }
            nextLabel={
              <svg
                className="h-5 w-5"
                data-todo-x-description="Heroicon name: solid/chevron-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            }
            pageCount={pageCount}
            onPageChange={changePage}
            previousLinkClassName={
              "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            }
            containerClassName={
              "relative z-0 inline-flex shadow-sm -space-x-px justify-center"
            }
            nextLinkClassName={
              "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            }
            disabledClassName={"disabled:opacity-50"}
            activeLinkClassName={"bg-blue-400 text-white focus:outline-none"}
            pageLinkClassName={
              "relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 "
            }
          />
        )}
      </div>
    </div>
  );
}
