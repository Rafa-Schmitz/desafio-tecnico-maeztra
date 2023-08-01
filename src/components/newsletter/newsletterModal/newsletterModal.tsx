import React from 'react';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Button, Modal, Text, TextInput, useMantineTheme } from '@mantine/core';
import { getCookie, setCookie } from '../../../utils/setCookies';
import newsLogo from '../../../assets/imgNewsletterModal.svg';
import newsletterEmailLogo from '../../../assets/newsletter-mail-icon.svg';
import { useNewsletterModalStyles } from './newsletterModalStyles';
import './styles.css';

export const NewsLetterModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  const { classes } = useNewsletterModalStyles();

  const handleClose = () => {
    setCookie("hasSeenModal", true, 1000);
    close();
  }

  React.useEffect(() => {
    const cookie = getCookie("hasSeenModal");

    if (!cookie) {
      setTimeout(() => {
        open()
      }, 3000)
    }
  }, [open])


  return (
    <>
      <Modal closeOnEscape classNames={{inner: classes.modalInner, body: classes.modalBody, header: classes.modalHeader, content: classes.modalContent }} opened={opened} onClose={handleClose} centered>
        <div className='news_container'>
          {!mobile && (
            <div className='news__left-col'>
              <img src={newsLogo} alt="newsletter image" />
            </div>
          )}
          <div className='news__right-col' style={{ width: `${mobile ? "100%" : "50%"}` }}>
            <img src={newsletterEmailLogo} alt="newsletter email logo" />
            <Text ta="center" className={classes.modalTitle}>BEM VINDO À MAEZTRA</Text>
            <Text ta="center" className={classes.modalSubtitle} >Receba em Primeira mão</Text>
            <Text ta="center" className={classes.modalSubtitle} ><b>desconto e ofertas exclusivas</b></Text>
            <div className={classes.controls}>
              <TextInput
                placeholder="Digite seu e-mail"
                classNames={{ input: classes.input, root: classes.inputWrapper }}
              />
              <Button className={classes.control}>Enviar</Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}