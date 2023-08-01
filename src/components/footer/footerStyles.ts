import { createStyles, px, rem } from "@mantine/core";

export const useFooterStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: "#353535",
    marginTop: px(57),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: 1600,
    margin: "0 auto",
    padding: "0 20px",
    boxSizing: "border-box",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));
