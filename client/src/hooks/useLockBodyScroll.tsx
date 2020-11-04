import React from "react";

export function useLockBodyScroll() {
  const isMounted = React.useRef(false);
  React.useLayoutEffect(() => {
    isMounted.current = true;
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => {
      isMounted.current = false;
      document.body.style.overflow = originalStyle;
    };
  }, []);
  return isMounted;
}
