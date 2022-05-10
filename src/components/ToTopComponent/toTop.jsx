import { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import "./toTop.css";

export const ToTopComponent = () => {
  const [topButton, setToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setToTop(true);
      } else {
        setToTop(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      (
      {topButton && (
        <BsFillArrowUpSquareFill
          onClick={scrollUp}
          className="button-scroll-up"
        />
      )}
      )
    </div>
  );
};
