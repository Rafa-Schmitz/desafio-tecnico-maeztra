import { createStyles } from "@mantine/core";

export const useInfoCardStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: `calc(${theme.spacing.xl} * 2)`,
    borderRadius: theme.radius.md,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      padding: theme.spacing.xl,
    },
  },

  image: {
    width: "100%",

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
