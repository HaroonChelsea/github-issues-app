const ADD_ISSUES = "ADD_ISSUES";
const CLEAR_ISSUES = "CLEAR_ISSUES";

export const addIssues = (payload) => ({
  type: ADD_ISSUES,
  payload,
});
export const clearIssues = () => ({
  type: CLEAR_ISSUES,
});
