import { createStyles, getStylesRef, rem } from "@mantine/core";

export const useShelfStyles = createStyles((theme) => ({
  price: {
    color: "#353535",
    fontSize: 20,
  },

  productName: {
    fontSize: 16,
  },

  productDescription: {
    fontSize: 12,
    color: "#353535",
    opacity: 0.5,
    lineHeight: "18px",
  },

  carousel: {
    "&:hover": {
      [`& .${getStylesRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef("carouselControls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: "width 250ms ease",

    "&[data-active]": {
      width: rem(16),
    },
  },

  root: {
    backgroundColor: "transparent",
    border: "none",
  },

  addToCart: {
    fontSize: 16,
    willChange: "opacity",
    transition: "opacity 400ms",
    ":hover": {
      backgroundColor: "#FAA500",
      opacity: 0.7,
    },
  },

  tipBar: {
    padding: "0 20px",
    [theme.fn.smallerThan("md")]: {
      padding: "0 0 0 31px",
    },
    userSelect: "none",
    maxWidth: "1600px",
    margin: "0 auto",
    boxSizing: "border-box",
  },

  swatches: {
    cursor: "pointer",
  },

  carets: {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
  },

  image: {
    objectFit: "contain",
  },

  cardMain: {
    border: "none",
    backgroundColor: "transparent",
  },
}));
