import { useEffect, useState } from "react";

const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  largeDesktop: 1536,
};

const getBreakpoint = (width) => {
  if (width < BREAKPOINTS.mobile) return "mobile";
  if (width < BREAKPOINTS.tablet) return "tablet";
  if (width < BREAKPOINTS.laptop) return "laptop";
  if (width < BREAKPOINTS.desktop) return "desktop";
  if (width < BREAKPOINTS.largeDesktop) return "largeDesktop";
  return "extraLargeDesktop";
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(
    getBreakpoint(window.innerWidth),
  );

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
};

export default useBreakpoint;
