import { combineReducers } from "redux";
import ThemeReducer from "./themeReducer";
const reducers = combineReducers({
  appTheme: ThemeReducer,
});

export default reducers;
