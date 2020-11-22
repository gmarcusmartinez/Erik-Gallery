import { PageActionTypes } from "store/actions/types";

export const scrollToTop = () => (dispatch: any) => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  dispatch({
    type: PageActionTypes.SCROLL_TO_TOP,
  });
};
