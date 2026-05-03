import { useEffect } from "react";
// here ref = ref
// className = class you want to toggle
// elem = which element you want to toggle style
// 1 = current element
// 2 = first child node
// 3 = third child node
// 4 = nextSibling of current element
const useScroll = (ref, className, elemType = 1) => {
  useEffect(() => {
    const parentElement = ref.current;
    if (!parentElement) return;

    const getTargetElement = () => {
      switch (elemType) {
        case 1:
          return parentElement;
        case 2:
          return parentElement.childNodes[0];
        case 3:
          return parentElement.childNodes[1];
        case 4:
          return parentElement.nextSibling;
        default:
          return parentElement;
      }
    };

    const target = getTargetElement();
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          target.classList.add(className);
        } else {
          // Optional: remove if you want it to re-animate every time
          target.classList.remove(className);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(parentElement);

    return () => {
      if (parentElement) observer.unobserve(parentElement);
    };
  }, [ref, className, elemType]);
};

export default useScroll;
