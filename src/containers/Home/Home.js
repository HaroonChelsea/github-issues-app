import React from "react";
import Tabs from "../Tabs/Tabs";
import ReposList from "../../components/ReposList/ReposList";
import { useSelector, useDispatch } from "react-redux";
import { selectRepo } from "../../store/actions/repos";
import { clearIssues } from "../../store/actions/issues";
import { fetchPopularRepos } from "../../utils/api";

export default function Home() {
  React.useEffect(() => {
    dispatch(clearIssues());
  }, []);
  const [error, setError] = React.useState(null);
  const repos = useSelector((state) => state.repos);
  const selectedLanguage = useSelector((state) => state.selectedLanguage);
  const dispatch = useDispatch();
  React.useEffect(() => {
    setError(null);
    if (!repos[selectedLanguage]) {
      fetchPopularRepos(selectedLanguage)
        .then((res) => {
          dispatch(selectRepo({ res, selectedLanguage }));
        })
        .catch((err) => setError(err));
    }
  }, [selectedLanguage]);
  return (
    <>
      <Tabs />
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
      ) : repos[selectedLanguage] ? (
        <ReposList repos={repos[selectedLanguage]} />
      ) : (
        <div className="flex h-full">
          <div className="m-auto">
            <div className="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
