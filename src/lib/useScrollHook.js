/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef } from "react";

const useScrollHook = () => {
  const scrollRef = useRef();
  let intervalOne, intervalTwo;

  function scrollObserverHandler(entries) {
    if (entries[0].isIntersecting) {
      clearInterval(intervalTwo);
      intervalOne = setInterval(
        () =>
          scrollRef.current.scrollBy({
            top: 0,
            left: window.innerWidth,
            behavior: "smooth",
          }),
        5000
      );
    }
    return false;
  }

  function firstchildObserverHandler(entries) {
    if (entries[0].isIntersecting) {
      clearInterval(intervalOne);
      intervalTwo = setInterval(
        () =>
          scrollRef.current.scrollBy({
            top: 0,
            left: -window.innerWidth,
            behavior: "smooth",
          }),
        5000
      );
    }
    return false;
  }

  const scrollObserver = new IntersectionObserver(scrollObserverHandler, {
    threshold: 0.8,
    root: scrollRef.current,
  });

  const scrollObserverTwo = new IntersectionObserver(
    firstchildObserverHandler,
    {
      threshold: 0.8,
      root: scrollRef.current,
    }
  );

  useEffect(() => {
    const firstChild = scrollRef.current.children[0];
    const lastChild =
      scrollRef.current.children[scrollRef.current.children.length - 1];

    scrollObserver.observe(firstChild);
    scrollObserverTwo.observe(lastChild);
  }, []);

  return { scrollRef };
};

export default useScrollHook;
