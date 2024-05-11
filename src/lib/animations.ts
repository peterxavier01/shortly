export const heroTextVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1,
    },
  },
};

export const heroImgVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1,
    },
  },
};

export const formContainerVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
    },
  },
};

export const statsTextVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
    },
  },
};

export const logoDarkVariants = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(52, 49, 61, 1)",

    transition: {
      duration: 0.5,
    },
  },
};

export const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1.1,
    },
  },
};

export const ctaVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,

    transition: {
      type: "spring",
      dampping: 5,
      stiffness: 80,
      duration: 0.8,
    },
  },
};
