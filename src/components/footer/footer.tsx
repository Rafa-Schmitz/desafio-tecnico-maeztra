import { Group, useMantineTheme } from '@mantine/core';
import facebookLogo from '../../assets/fbLogo.svg';
import linkedinLogo from '../../assets/lkinLogo.svg';
import instagramLogo from '../../assets/instaLogo.svg';
import youtubeLogo from '../../assets/ytLogo.svg';
import visaLogo from '../../assets/visaLogo.svg';
import mastercardLogo from '../../assets/mastercardLogo.svg';
import vtexLogo from '../../assets/vtexFooter.svg';
import maeztraLogo from '../../assets/maeztraFooter.svg';
import { useMediaQuery } from '@mantine/hooks';
import { AccordionMenu } from './accordionMenu/accordion';
import './styles.css';
import { useFooterStyles } from './footerStyles';

export function Footer() {
  const { classes } = useFooterStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  return (
    <>
      {mobile && <AccordionMenu />}

      {!mobile && (
        <div className='footer__row'>
          <div className='footer__col'>
            <p className='footer__content footer__title'><b>Informações</b></p>
            <p className='footer__content'>Quem Somos</p>
            <p className='footer__content'>Prazo de Envio</p>
            <p className='footer__content'>Trocas e Devoluções</p>
            <p className='footer__content'>Promoções e Cupons</p>
          </div>

          <div className='footer__col'>
            <p className='footer__content footer__title'><b>Minha Conta</b></p>
            <p className='footer__content'>Minha conta</p>
            <p className='footer__content'>Meus Pedidos</p>
            <p className='footer__content'>Cadastre-se</p>
          </div>

          <div className='footer__col'>
            <p className='footer__content footer__title'><b>Onde nos Encontrar</b></p>
            <p className='footer__content'>Lojas</p>
            <p className='footer__content'>Endereço</p>
          </div>
        </div>
      )}

      <div className={classes.footer}>
        <div className={classes.inner}>
          <Group className={classes.links}>
            <img src={facebookLogo} alt="facebook logo" />
            <img src={linkedinLogo} alt="linkedinLogo" />
            <img src={instagramLogo} alt="instagram logo" />
            <img src={youtubeLogo} alt="youtube logo" />
          </Group>

          <Group mt={mobile ? 32 : ''} mb={mobile ? 32 : ''}>
            <img src={visaLogo} alt="visa logo" />
            <img src={mastercardLogo} alt="mastercard logo" />
            <img src={visaLogo} alt="visa logo" />
            <img src={mastercardLogo} alt="mastercard logo" />
          </Group>

          <Group className={classes.links}>
            <div style={{ display: "flex", columnGap: "20px" }}>
              <div>
                <p style={{ margin: "0" }} className="vtex-footer-text">Powered by</p>
                <img src={vtexLogo} alt="vtex logo" />
              </div>
              <div>
                <p style={{ margin: "0" }} className="maeztra-footer-text">Developed by</p>
                <img src={maeztraLogo} alt="maeztra logo" />
              </div>
            </div>
          </Group>
        </div>
      </div>
    </>
  );
}