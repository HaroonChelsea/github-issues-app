import { combineReducers } from "redux";

import selectedLanguage from "./changeLanguage";
import repos from "./repos";
import issues from "./issues";

const rootReducer = combineReducers({
  selectedLanguage,
  repos,
  issues,
});

export default rootReducer;
