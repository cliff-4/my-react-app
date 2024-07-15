import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: string;
};

const FadeIn: React.FC<FadeInProps> = ({
  children,
  className,
  delay = "0",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.0,
  });

  React.useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
