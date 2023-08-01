import { createStyles } from "@mantine/core";

export const useTipBarCarouselStyles = createStyles((theme) => ({
  tipBar: {
    padding: "0 20px",
    [theme.fn.smallerThan("md")]: {
      padding: "0 0 0 31px",
    },
    boxSizing: "border-box",
    maxWidth: "1598px",
    margin: "0 auto",
    userSelect: "none",
    cursor: "pointer",
  },
}));