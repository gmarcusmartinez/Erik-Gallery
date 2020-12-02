import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const setScrollLock = (path: string) => {
  const scrollable = [
    "prints",
    "dashboard",
    "checkout",
    "shipping",
    "review-order",
  ];

  if (scrollable.includes(path)) {
    return enableBodyScroll(document.querySelector(".main-content")!);
  } else {
    return disableBodyScroll(document.querySelector(".main-content")!);
  }
};

export default setScrollLock;
