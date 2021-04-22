import axios from "axios";

export function fetchComments(org, repo, issue_number) {
  return axios
    .get(
      `https://api.github.com/repos/${org}/${repo}/issues/${issue_number}/comments`
    )
    .then((res) => {
      if (!res.data) {
        throw new Error(res.data.message);
      }
      return res.data;
    })
    .catch((err) => Promise.reject(err));
}
export function fetchIssue(org, repo, issue_number) {
  return axios
    .get(`https://api.github.com/repos/${org}/${repo}/issues/${issue_number}`)
    .then((res) => {
      if (!res.data) {
        throw new Error(res.data.message);
      }
      return res;
    })
    .catch((err) => Promise.reject(err));
}
export function fetchIssues(org, repo, page) {
  return axios
    .get(
      `https://api.github.com/repos/${org}/${repo}/issues?per_page=25&page=${page}`
    )
    .then((res) => {
      if (!res.data) {
        throw new Error(res.data.message);
      }
      return res;
    })
    .catch((err) => Promise.reject(err));
}
export function fetchPopularRepos(language) {
  return axios
    .get(
      `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
    )
    .then((res) => {
      if (!res.data.items) {
        throw new Error(res.data.message);
      }
      return res.data.items;
    })
    .catch((err) => Promise.reject(err));
}
