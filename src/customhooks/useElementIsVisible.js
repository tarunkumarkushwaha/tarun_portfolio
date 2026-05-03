import { useEffect, useState } from "react";

const useElementIsVisible = (ref) => {
  const [isVisible, setIsVisible] = useState(false);
// console.log(ref.current,"refef")
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root:null,
        threshold: 0.2,
        rootMargin: "0px",
      },
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [ref]);

  return isVisible;
};

export default useElementIsVisible;
