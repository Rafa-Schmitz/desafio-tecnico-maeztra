import { createStyles } from "@mantine/core";

export const useInfoCardStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    boxSizing: "border-box",
    maxWidth: "1598px",
    margin: "80px auto",

    [theme.fn.smallerThan("md")]: {
      padding: "0 0 0 31px",
    },

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  image: {
    width: "100%",
    maxWidth: "1114px",

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,
    textAlign: "left",

    [theme.fn.smallerThan("sm")]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },
}));
