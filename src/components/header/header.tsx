import maeztraLogo from '../../assets/logo-maeztra-novo.png';
import myAccountIcon from '../../assets/my-account-icon.svg';
import wishListIcon from '../../assets/wishlist.svg';
import minicartIcon from '../../assets/minicartIcon.svg';
import mainMenuItemIcon from '../../assets/mainMenuItemIcon.svg';
import searchLogo from '../../assets/icon-busca.svg';
import shoppingBag from '../../assets/icon-shoppingbag.svg';
import {
  Burger,
  Button,
  TextInput,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import './styles.css';
import { useHeaderStyles } from './headerStyles';

const MENU_ITEMS = [
  { label: "Vestidos", link: "/vestidos", hasIcon: false, leftIcon: {} },
  { label: "Roupas", link: "/roupas", hasIcon: false, leftIcon: {} },
  { label: "Sapatos", link: "/sapatos", hasIcon: false, leftIcon: {} },
  { label: "Lingerie", link: "/lingerie", hasIcon: false, leftIcon: {} },
  { label: "Acessórios", link: "/acessorios", hasIcon: false, leftIcon: {} },
  { label: "OUTLET", link: "/outlet", hasIcon: false, leftIcon: {} },
]

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useHeaderStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  const items = MENU_ITEMS.map((item, index) => {
    return (
      <Button
        key={index}
        className={classes.menuItems}
      >
        {item.label}
      </Button>
    )
  });

  return (
    <header className="header__container">
      <div className='header__shdw'>
        <div className="header__wrapper grid">
          <div className="header__left_col">
            <Burger mr={15} opened={opened} onClick={toggle} className={classes.burger} size="sm" />
            <a href="/" target="_blank" className="logo__link">
              <img src={maeztraLogo} className="logo" alt="Maeztra logo" width={147} height={18} />
            </a>
          </div>

          {mobile && (
            <div className="header__right_col">
              <img src={searchLogo} className="searchLogo" alt="searchLogo logo" />
              <img src={shoppingBag} className="shoppingBag" alt="shoppingBag logo" />
            </div>
          )}

          {!mobile && (
            <>
              <div className={classes.controls}>
                <TextInput
                  placeholder="O Que Você Busca?"
                  classNames={{ input: classes.input, root: classes.inputWrapper, rightSection: classes.searchBtnSection, wrapper: classes.searchInputWrapper }}
                  rightSection={<Button className={classes.searchBtn}>Buscar</Button>}
                />
              </div>
              <div>
                <Button
                  className={classes.headerNav}
                  leftIcon={
                    <img src={myAccountIcon} className="my-account-icon" alt="Minha conta" width={14} height={16} />
                  }
                >
                  Minha conta
                </Button>
                <Button
                  className={classes.headerNav}
                  leftIcon={
                    <img src={wishListIcon} className="my-account-icon" alt="Minha conta" width={14} height={16} />
                  }
                >
                  Minha conta
                </Button>
                <Button
                  className={classes.minicartBtn}
                  leftIcon={
                    <img src={minicartIcon} className="my-account-icon" alt="Minha conta" width={14} height={16} />
                  }
                >
                  Meu Carrinho
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      {!mobile && (
        <div className="header__menuItems grid">
          <Button
            className={classes.mainMenuItem}
            leftIcon={
              <img src={mainMenuItemIcon} className="my-account-icon" alt="Minha conta" width={14} height={16} />
            }
          >
            Novidades
          </Button>
          {items}
        </div>
      )}
    </header>
  );
}