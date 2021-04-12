import React from "react";
import Tabs from "../../components/Tabs/Tabs";
import ReposList from "../../components/ReposList/ReposList";
import { useSelector, useDispatch } from "react-redux";
import { selectRepo } from "../../store/actions/repos";
import { clearIssues } from "../../store/actions/issues";
import { fetchPopularRepos } from "../../utils/api";

export default function Home() {
  React.useEffect(() => {
    dispatch(clearIssues());
  }, []);
  const repos = useSelector((state) => state.repos);
  const selectedLanguage = useSelector((state) => state.selectedLanguage);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!repos[selectedLanguage]) {
      fetchPopularRepos(selectedLanguage).then((res) => {
        dispatch(selectRepo({ res, selectedLanguage }));
      });
    }
  }, [selectedLanguage]);
  return (
    <>
      <Tabs />
      {repos[selectedLanguage] ? (
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
