import { useState, useEffect } from "react";

function useWindowWidthResize() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (window) {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      setWindowWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return windowWidth;
}

export default useWindowWidthResize;
