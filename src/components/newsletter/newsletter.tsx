import { useMantineTheme, Title, Button, TextInput } from '@mantine/core';
import { useMediaQuery } from "@mantine/hooks";
import { useNewsletterStyles } from './newsletterStyles';

export const Newsletter = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  const { classes } = useNewsletterStyles();

  return (
    <>
      <div className={classes.body}>
        <Title
          c="#000000"
          mt={mobile ? "23px" : ""}
          mb="16px"
          ta="center"
          fz={24}
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