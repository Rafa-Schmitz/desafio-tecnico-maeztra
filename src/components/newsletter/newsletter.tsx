import { createStyles, useMantineTheme, Title, Button, TextInput } from '@mantine/core';
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: "0 20px",

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xl,
      flexDirection: 'column',
    },
    // paddingRight: `calc(${theme.spacing.xl} * 4)`,
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
  },

  control: {
    width: 131,
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

export const Newsletter = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.body}>
        <Title
          c="#000000"
          mt={mobile ? "23px" : ""}
          mb="16px"
          ta="center"
          fz={24}
        // w="100%"
        >
          Recebe Nossa Newsletter
        </Title>

        <div className={classes.controls}>
          <TextInput
            placeholder="Digite seu e-mail"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control}>Enviar</Button>
        </div>
      </div>
    </>
  );
}