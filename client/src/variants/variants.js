export const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

export const buttonVariant = {
  onHover: {
    scale: 1.2,
    borderRadius: "15px",
    textShadow: "0px 0px 8px rgb(255 255 255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
  animate: { x: 0, opacity: 1 },
  trans: { duration: 1, type: "spring", stiffness: 300 },
};
