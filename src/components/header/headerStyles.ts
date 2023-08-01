import { createStyles } from "@mantine/core";

export const useHeaderStyles = createStyles((theme) => ({
  burger: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  controls: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    display: "flex",
    marginTop: theme.spacing.xl,
  },

  searchInputWrapper: {
    height: "100%",
  },

  inputWrapper: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    width: "100%",
    height: "100%",
    flex: "1",
  },

  input: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    height: "100%",
    width: "100%",
    border: "none",
    borderRadius: 10,
    backgroundColor: "#EFEFEF",
    textIndent: "14px",
    "::placeholder": {
      fontSize: 12,
      color: "#353535",
    },
  },

  searchBtnSection: {
    width: "auto",
  },

  searchBtn: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    width: 119,
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#FAA500",
    willChange: "opacity",
    transition: "opacity 400ms",
    ":hover": {
      backgroundColor: "#FAA500",
      opacity: 0.7,
    },
  },

  headerNav: {
    color: "#353535",
    backgroundColor: "transparent",
    willChange: "opacity",
    transition: "opacity 400ms",
    ":hover": {
      backgroundColor: "transparent",
      opacity: 0.7,
    },
  },

  minicartBtn: {
    backgroundColor: "transparent",
    border: "1px solid #FAA500",
    borderRadius: 8,
    color: "#353535",
    minWidth: 'fit-content',
    width: 134,
    willChange: "opacity",
    transition: "opacity 400ms",
    ":hover": {
      backgroundColor: "transparent",
      opacity: 0.7,
    },
  },

  menuItems: {
    width: 145,
    height: 21,
    color: "#353535",
    backgroundColor: "transparent",
    willChange: "opacity color",
    transition: "opacity, color 400ms",
    ":hover": {
      backgroundColor: "transparent",
      opacity: 0.7,
      color: "#FAA500",
    },
  },

  mainMenuItem: {
    width: 145,
    height: 21,
    color: "#FAA500",
    backgroundColor: "transparent",
    willChange: "opacity",
    transition: "opacity 400ms",
    ":hover": {
      backgroundColor: "transparent",
      opacity: 0.6,
    },
  },
}));
