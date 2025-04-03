import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const LocomotiveScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1,
      smartphone: { smooth: false },
      tablet: { smooth: false },
    });

    return () => {
      locoScroll.destroy(); // Cleanup on unmount
    };
  }, []);

  return <div ref={scrollRef}>{children}</div>;
};

export default LocomotiveScrollProvider;
