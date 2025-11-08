import * as React from "react";

const DESKTOP_BREAKPOINT = 1024;

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState<boolean>(false);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
    };
    
    // Check immediately
    checkDesktop();
    
    // Set up media query listener
    const mql = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    mql.addEventListener("change", checkDesktop);
    
    // Also listen to resize events for better reliability
    window.addEventListener("resize", checkDesktop);
    
    return () => {
      mql.removeEventListener("change", checkDesktop);
      window.removeEventListener("resize", checkDesktop);
    };
  }, []);

  // Return false until mounted to prevent flash of content
  if (!isMounted) {
    return false;
  }

  return isDesktop;
}

