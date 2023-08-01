import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, rem, useMantineTheme } from '@mantine/core';
import mainSliderImage from '../../assets/fullbanner.png';
import mainSliderMobileImage from '../../assets/fullbannerMobile.png';
import prevCaret from '../../assets/icon-prev.svg';
import nextCaret from '../../assets/icon-next.svg';
import { useSliderLayoutStyles } from './sliderLayoutStyles';

interface CardProps {
  image: string;
  title: string;
  category: string;
}

const Card = ({ image, title, category }: CardProps) => {
  const { classes } = useSliderLayoutStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}

const data = [
  {
    image: mainSliderImage,
    mobileImage: mainSliderMobileImage,
    title: '',
    category: '',
  },
  {
    image: mainSliderImage,
    mobileImage: mainSliderMobileImage,
    title: '',
    category: '',
  },
  {
    image: mainSliderImage,
    mobileImage: mainSliderMobileImage,
    title: '',
    category: '',
  },
];

export const SliderLayout = () => {
  const { classes } = useSliderLayoutStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const slides = data.map((item, index) => (
    <Carousel.Slide key={index}>
      <Card image={mobile ? item.mobileImage : item.image} title={item.title} category={item.category} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      draggable
      loop
      slideSize="100%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={1}
      orientation="horizontal"
      previousControlIcon={<img src={prevCaret} />}
      nextControlIcon={<img src={nextCaret} />}
      classNames={{ control: classes.carets }}
      controlsOffset={100}
    >
      {slides}
    </Carousel>
  );
}