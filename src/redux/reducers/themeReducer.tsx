import { ThemeModes } from "../../types";

const reducer = (state = ThemeModes.dark, action: any) => {
  switch (action.type) {
    case "setAppTheme":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
