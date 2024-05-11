import { LazyMotion, domAnimation } from "framer-motion";

const MotionLazy = ({ children }: { children: React.ReactNode }) => {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
};

export default MotionLazy;
