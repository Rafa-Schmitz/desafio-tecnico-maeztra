import { Image, Card, Text, Group, Button, useMantineTheme, ColorSwatch } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { TitleComponent } from '../../titleComponent/titleComponent';
import { useMediaQuery } from '@mantine/hooks';
import product01 from '../../../assets/prod01.svg';
import product02 from '../../../assets/prod02.svg';
import prevCaret from '../../../assets/icon-prev.svg';
import nextCaret from '../../../assets/icon-next.svg';
import { useShelfStyles } from './shelfStyles';

const images = [product01, product02];
const colours = ["orange", "red", "indigo", "violet"]

export const HomeProductShelf = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { classes } = useShelfStyles();

  const swatches = colours.map((color) => (
    <ColorSwatch className={classes.swatches} radius={4} key={color} color={theme.colors[color][5]} />
  ));

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={381} classNames={{ image: classes.image }} fit='contain' />
    </Carousel.Slide>
  ));

  return (
    <>
      <TitleComponent
        content="As Mais Pedidas"
        fontSize={mobile ? '24px' : '32px'}
        margin={mobile ? '40px 0 16px' : '80px 0 24px'}
        fontWeight={700}
      />

      <Carousel
        classNames={{ control: classes.carets }}
        className={classes.tipBar}
        draggable={false}
        slideSize="40%"
        breakpoints={[
          { minWidth: '1024', slideSize: '20%', slideGap: 1 },
          { maxWidth: '768', slideSize: '55%', slideGap: 10 },
          { maxWidth: '600', slideSize: '70%', slideGap: 10 },
          { maxWidth: '475', slideSize: '90%', slideGap: 10 },
        ]}
        slideGap="sm"
        align="start"
        slidesToScroll={1}
        withIndicators={false}
        inViewThreshold={1}
        loop
        previousControlIcon={<img src={prevCaret} />}
        nextControlIcon={<img src={nextCaret} />}
      >
        {/* produto 1 -- que gambiarra tenebrosa */}
        <Carousel.Slide>
          <Card radius="md" padding="xl" className={classes.cardMain}>
            <Card.Section>
              <Carousel
                withIndicators
                withControls={false}
                loop
                classNames={{
                  root: classes.carousel,
                  controls: classes.carouselControls,
                  indicator: classes.carouselIndicator,
                }}
              >
                {slides}
              </Carousel>
            </Card.Section>

            <Group position="left" mt="lg" maw={254} m="0 auto">
              {swatches}
            </Group>

            <Text mt={8} mb={8} maw={254} m="0 auto" fw={500} className={classes.price}>
              <b>R$ 500,00</b>
            </Text>

            <Text mb={8} fw={500} maw={254} m="0 auto" className={classes.productName}>
              Faux Suede Mini Skirt
            </Text>

            <Text mb={8} fw={500} maw={254} m="0 auto" className={classes.productDescription}>
              A faux suede mini skirt featuring exposed button-front closures and panel seam construction.
            </Text>

            <Group position="center" mt="md" w="100%" maw={254} m="0 auto">
              <Button h={35} radius="4px" fullWidth bg="#FAA500" className={classes.addToCart}>Adicionar</Button>
            </Group>
          </Card>
        </Carousel.Slide>

        {/* produto 2 -- tô tendo que repetir componente na unha */}
        <Carousel.Slide>
          <Card radius="md" padding="xl" className={classes.cardMain}>
            <Card.Section>
              <Carousel
                withIndicators
                withControls={false}
                loop
                classNames={{
                  root: classes.carousel,
                  controls: classes.carouselControls,
                  indicator: classes.carouselIndicator,
                }}
              >
                {slides}
              </Carousel>
            </Card.Section>

            <Group position="left" mt="lg" maw={254} m="0 auto">
              {swatches}
            </Group>

            <Text mt={8} mb={8} maw={254} m="0 auto" fw={500} className={classes.price}>
              <b>R$ 500,00</b>
            </Text>

            <Text mb={8} fw={500} maw={254} m="0 auto" className={classes.productName}>
              Faux Suede Mini Skirt
            </Text>

            <Text mb={8} fw={500} maw={254} m="0 auto" className={classes.productDescription}>
              A faux suede mini skirt featuring exposed button-front closures and panel seam construction.
            </Text>

            <Group position="center" mt="md" w="100%" maw={254} m="0 auto">
              <Button h={35} radius="4px" fullWidth bg="#FAA500" className={classes.addToCart}>Adicionar</Button>
            </Group>
          </Card>
        </Carousel.Slide>

        {/* produto 3 -- porque não dá tempo de fazer certo aff xd*/}
        <Carousel.Slide>
          <Card radius="md" padding="xl" className={classes.cardMain}>
            <Card.Section>
              <Carousel
                withIndicators
                withControls={false}
                loop
                classNames={{
                  root: classes.carousel,
                  controls: classes.carouselControls,
                  indicator: classes.carouselIndicator,
                }}
              >
                {slides}
              </Carousel>
            </Card.Section>

            <Group position="left" mt="lg" maw={254} m="0 auto">
              {swatches}
            </Group>

            <Text mt={8} mb={8} maw={254} m="0 auto" fw={500} className={classes.price}>
              <b>R$ 500,00</b>
            </Text>

            <Text mb={8} fw={500} maw={254} m="0 auto" className={classes.productName}>
              Faux Suede Mini Skirt
            </Text>

            <Text mb={8} fw={500} maw={254} m="0 auto" className={classes.productDescription}>
              A faux suede mini skirt featuring exposed button-front closures and panel seam construction.
            </Text>

            <Group position="center" mt="md" w="100%" maw={254} m="0 auto">
              <Button h={35} radius="4px" fullWidth bg="#FAA500" className={classes.addToCart}>Adicionar</Button>
            </Group>
          </Card>
        </Carousel.Slide>

        {/* produto 4 -- coisa feia */}
        <Carousel.Slide>
          <Card radius="md" padding="xl" className={classes.cardMain}>
            <Card.Section>
              <Carousel
                withIndicators
                withControls={false}
                loop
                classNames={{
                  root: classes.carousel,
                  controls: classes.carouselControls,
                  indicator: classes.carouselIndicator,
                }}
              >
                {slides}
              </Carousel>
            </Card.Section>

            <Group position="left" mt="lg" maw={254} m="0 auto">
              {swatches}
            </Group>

            <Text mt={8} mb={8} maw={254} m="0 auto" fw={500} className={classes.price}>
              <b>R$ 500,00</b>
            </Text>

            <Text mb={8} fw={500} maw={254} m="0 auto" className={classes.productName}>
              Faux Suede Mini Skirt
            </Text>

            <Text mb={8} fw={500} maw={254} m="0 auto" className={classes.productDescription}>
              A faux suede mini skirt featuring exposed button-front closures and panel seam construction.
            </Text>

            <Group position="center" mt="md" w="100%" maw={254} m="0 auto">
              <Button h={35} radius="4px" fullWidth bg="#FAA500" className={classes.addToCart}>Adicionar</Button>
            </Group>
          </Card>
        </Carousel.Slide>

        {/* produto 5 -- paciência, foi o que deu pra fazer em 24h, espero que entendam :| */}
        <Carousel.Slide>
          <Card radius="md" padding="xl" className={classes.cardMain}>
            <Card.Section>
              <Carousel
                withIndicators
                withControls={false}
                loop
                classNames={{
                  root: classes.carousel,
                  controls: classes.carouselControls,
                  indicator: classes.carouselIndicator,
                }}
              >
                {slides}
              </Carousel>
            </Card.Section>

            <Group position="left" mt="lg" maw={254} m="0 auto">
              {swatches}
            </Group>

            <Text mt={8} mb={8} maw={254} m="0 auto" fw={500} className={classes.price}>
              <b>R$ 500,00</b>
            </Text>

            <Text mb={8} fw={500} maw={254} m="0 auto" className={classes.productName}>
              Faux Suede Mini Skirt
            </Text>

            <Text mb={8} fw={500} maw={254} m="0 auto" className={classes.productDescription}>
              A faux suede mini skirt featuring exposed button-front closures and panel seam construction.
            </Text>

            <Group position="center" mt="md" w="100%" maw={254} m="0 auto">
              <Button h={35} radius="4px" fullWidth bg="#FAA500" className={classes.addToCart}>Adicionar</Button>
            </Group>
          </Card>
        </Carousel.Slide>

        {/* produto 6 -- que gambiarra tenebrosa */}
        <Carousel.Slide>
          <Card radius="md" padding="xl" className={classes.cardMain}>
            <Card.Section>
              <Carousel
                withIndicators
                withControls={false}
                loop
                classNames={{
                  root: classes.carousel,
                  controls: classes.carouselControls,
                  indicator: classes.carouselIndicator,
                }}
              >
                {slides}
              </Carousel>
            </Card.Section>

            <Group position="left" mt="lg" maw={254} m="0 auto">
              {swatches}
            </Group>

            <Text mt={8} mb={8} maw={254} m="0 auto" fw={500} className={classes.price}>
              <b>R$ 500,00</b>
            </Text>

            <Text mb={8} fw={500} maw={254} m="0 auto" className={classes.productName}>
              Faux Suede Mini Skirt
            </Text>

            <Text mb={8} fw={500} maw={254} m="0 auto" className={classes.productDescription}>
              A faux suede mini skirt featuring exposed button-front closures and panel seam construction.
            </Text>

            <Group position="center" mt="md" w="100%" maw={254} m="0 auto">
              <Button h={35} radius="4px" fullWidth bg="#FAA500" className={classes.addToCart}>Adicionar</Button>
            </Group>
          </Card>
        </Carousel.Slide>

        {/* produto 7 -- tô tendo que repetir componente na unha */}
        <Carousel.Slide>
          <Card radius="md" padding="xl" className={classes.cardMain}>
            <Card.Section>
              <Carousel
                withIndicators
                withControls={false}
                loop
                classNames={{
                  root: classes.carousel,
                  controls: classes.carouselControls,
                  indicator: classes.carouselIndicator,
                }}
              >
                {slides}
              </Carousel>
            </Card.Section>

            <Group position="left" mt="lg" maw={254} m="0 auto">
              {swatches}
            </Group>

            <Text mt={8} mb={8} maw={254} m="0 auto" fw={500} className={classes.price}>
              <b>R$ 500,00</b>
            </Text>

            <Text mb={8} fw={500} maw={254} m="0 auto" className={classes.productName}>
              Faux Suede Mini Skirt
            </Text>

            <Text mb={8} fw={500} maw={254} m="0 auto" className={classes.productDescription}>
              A faux suede mini skirt featuring exposed button-front closures and panel seam construction.
            </Text>

            <Group position="center" mt="md" w="100%" maw={254} m="0 auto">
              <Button h={35} radius="4px" fullWidth bg="#FAA500" className={classes.addToCart}>Adicionar</Button>
            </Group>
          </Card>
        </Carousel.Slide>

        {/* produto 8 -- porque não dá tempo de fazer certo aff xd*/}
        <Carousel.Slide>
          <Card radius="md" padding="xl" className={classes.cardMain}>
            <Card.Section>
              <Carousel
                withIndicators
                withControls={false}
                loop
                classNames={{
                  root: classes.carousel,
                  controls: classes.carouselControls,
                  indicator: classes.carouselIndicator,
                }}
              >
                {slides}
              </Carousel>
            </Card.Section>

            <Group position="left" mt="lg" maw={254} m="0 auto">
              {swatches}
            </Group>

            <Text mt={8} mb={8} maw={254} m="0 auto" fw={500} className={classes.price}>
              <b>R$ 500,00</b>
            </Text>

            <Text mb={8} fw={500} maw={254} m="0 auto" className={classes.productName}>
              Faux Suede Mini Skirt
            </Text>

            <Text mb={8} fw={500} maw={254} m="0 auto" className={classes.productDescription}>
              A faux suede mini skirt featuring exposed button-front closures and panel seam construction.
            </Text>

            <Group position="center" mt="md" w="100%" maw={254} m="0 auto">
              <Button h={35} radius="4px" fullWidth bg="#FAA500" className={classes.addToCart}>Adicionar</Button>
            </Group>
          </Card>
        </Carousel.Slide>

        {/* produto 9 -- coisa feia */}
        <Carousel.Slide>
          <Card radius="md" padding="xl" className={classes.cardMain}>
            <Card.Section>
              <Carousel
                withIndicators
                withControls={false}
                loop
                classNames={{
                  root: classes.carousel,
                  controls: classes.carouselControls,
                  indicator: classes.carouselIndicator,
                }}
              >
                {slides}
              </Carousel>
            </Card.Section>

            <Group position="left" mt="lg" maw={254} m="0 auto">
              {swatches}
            </Group>

            <Text mt={8} mb={8} maw={254} m="0 auto" fw={500} className={classes.price}>
              <b>R$ 500,00</b>
            </Text>

            <Text mb={8} fw={500} maw={254} m="0 auto" className={classes.productName}>
              Faux Suede Mini Skirt
            </Text>

            <Text mb={8} fw={500} maw={254} m="0 auto" className={classes.productDescription}>
              A faux suede mini skirt featuring exposed button-front closures and panel seam construction.
            </Text>

            <Group position="center" mt="md" w="100%" maw={254} m="0 auto">
              <Button h={35} radius="4px" fullWidth bg="#FAA500" className={classes.addToCart}>Adicionar</Button>
            </Group>
          </Card>
        </Carousel.Slide>

        {/* produto 10 -- paciência, foi o que deu pra fazer em 24h, espero que entendam :| */}
        <Carousel.Slide>
          <Card radius="md" padding="xl" className={classes.cardMain}>
            <Card.Section>
              <Carousel
                withIndicators
                withControls={false}
                loop
                classNames={{
                  root: classes.carousel,
                  controls: classes.carouselControls,
                  indicator: classes.carouselIndicator,
                }}
              >
                {slides}
              </Carousel>
            </Card.Section>

            <Group position="left" mt="lg" maw={254} m="0 auto">
              {swatches}
            </Group>

            <Text mt={8} mb={8} maw={254} m="0 auto" fw={500} className={classes.price}>
              <b>R$ 500,00</b>
            </Text>

            <Text mb={8} fw={500} maw={254} m="0 auto" className={classes.productName}>
              Faux Suede Mini Skirt
            </Text>

            <Text mb={8} fw={500} maw={254} m="0 auto" className={classes.productDescription}>
              A faux suede mini skirt featuring exposed button-front closures and panel seam construction.
            </Text>

            <Group position="center" mt="md" w="100%" maw={254} m="0 auto">
              <Button h={35} radius="4px" fullWidth bg="#FAA500" className={classes.addToCart}>Adicionar</Button>
            </Group>
          </Card>
        </Carousel.Slide>

      </Carousel>
    </>
  );
}