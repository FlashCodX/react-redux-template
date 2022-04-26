import { ThemeModes } from "../../types";

export const setAppTheme = (state: ThemeModes) => {
  return (dispatch: any) => {
    dispatch({
      type: "setAppTheme",
      payload: state,
    });
  };
};
