const ADD_ISSUES = "ADD_ISSUES";
const ADD_SINGLE_ISSUE = "ADD_SINGLE_ISSUE";
const CLEAR_ISSUES = "CLEAR_ISSUES";

export const addIssues = (payload) => ({
  type: ADD_ISSUES,
  payload,
});
export const addSingleIssue = (payload) => ({
  type: ADD_SINGLE_ISSUE,
  payload,
});
export const clearIssues = () => ({
  type: CLEAR_ISSUES,
});
