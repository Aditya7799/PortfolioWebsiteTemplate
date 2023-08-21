import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// We calling this component to go back to the top of the page whenever the location (pathname) changes in the application. 
function NewPage() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default NewPage;
