import { createStyles } from "@mantine/core";

export const useNewsletterModalStyles = createStyles((theme) => ({
  modalBody: {
    padding: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },

  modalContent: {
    flex: "none",
    width: "90%",
    maxWidth: "848px",
    height: "529px",

    [theme.fn.smallerThan("sm")]: {
      height: "328px",
    },
  },

  modalHeader: {
    display: "none",
  },

  modalTitle: {
    fontSize: 12,
    color: "rgba(70, 75, 84, 1)",
    marginBottom: 12,
  },

  modalSubtitle: {
    fontSize: 20,
    lineHeight: "23px",
    color: "rgba(120, 125, 131, 1)",
  },

  modalInner: {
    width: "90%",
  },

  controls: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "322px",
    marginTop: theme.spacing.xl,
  },

  control: {
    width: "100%",
    height: "40px",
    borderRadius: "10px",
    backgroundColor: "#FAA500",
    willChange: "opacity",
    transition: "opacity 400ms",
    ":hover": {
      backgroundColor: "#FAA500",
      opacity: 0.7,
    },
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    height: "40px",
    borderRadius: "10px",
    marginBottom: "10px",
  },
}));
