import { createStyles } from '@mantine/core';

export const useNewsletterStyles = createStyles((theme) => ({
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: "0 20px",
    height: "120px",
    border: "2px solid rgba(239, 239, 239, 1)",

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xl,
      flexDirection: 'column',
    },
  },

  searchBtn: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
    width: 119,
    height: '100%',
    borderRadius: 10,
    backgroundColor: "#FAA500",
    willChange: "opacity",
    transition: "opacity 400ms",
    ":hover": {
      backgroundColor: "#FAA500",
      opacity: 0.7
    }
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
    height: "40px"
  },

  control: {
    width: 131,
    height: "40px",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "#FAA500",
    willChange: "opacity",
    transition: "opacity 400ms",
    ":hover": {
      backgroundColor: "#FAA500",
      opacity: 0.7
    }
  },
}));