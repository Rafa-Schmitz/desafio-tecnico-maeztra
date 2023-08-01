import { Text, Image, useMantineTheme, Title } from '@mantine/core';
import mobInfoCardImg from '../../assets/mobileInfoCardImg.svg';
import infoCardImg from '../../assets/infoCardImg.png';
import { useMediaQuery } from "@mantine/hooks";
import { useInfoCardStyles } from './infoCardStyles';

export const InfoCard = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  const { classes } = useInfoCardStyles();

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title
            c="#000000"
            mt={mobile ? "23px" : ""}
            mb="16px"
            ta="left"
            fz={24}
          >
            Lorem ipsum
          </Title>

          <Text maw={420} fz={14} c="dark" fw={400}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.
          </Text>
        </div>
        <Image src={mobile ? infoCardImg : mobInfoCardImg} className={classes.image} />
      </div>
    </>
  );
}