import tipBarIcon1 from '../../assets/TipbarBrand01.svg';
import tipBarIcon2 from '../../assets/TipbarBrand02.svg';
import tipBarIcon3 from '../../assets/TipbarBrand03.svg';
import tipBarIcon4 from '../../assets/zara.svg';
import tipBarIcon5 from '../../assets/TipbarBrand05.svg';
import { Carousel } from '@mantine/carousel';
import { TitleComponent } from '../titleComponent/titleComponent';
import './styles.css';
import { useTipBarCarouselStyles } from '../tipbar/tipbarCarouselStyles';

interface Banner {
  imageUrl: string;
  mobileWidth: number;
  width: number;
  height: number;
}

const TIPBAR_BRANDS_CONTENT: Banner[] = [
  { imageUrl: tipBarIcon1, mobileWidth: 298, width: 308, height: 64 },
  { imageUrl: tipBarIcon2, mobileWidth: 298, width: 308, height: 64 },
  { imageUrl: tipBarIcon3, mobileWidth: 298, width: 308, height: 64 },
  { imageUrl: tipBarIcon4, mobileWidth: 298, width: 308, height: 67 },
  { imageUrl: tipBarIcon5, mobileWidth: 298, width: 308, height: 64 },
  { imageUrl: tipBarIcon1, mobileWidth: 298, width: 308, height: 64 },
  { imageUrl: tipBarIcon2, mobileWidth: 298, width: 308, height: 64 },
  { imageUrl: tipBarIcon3, mobileWidth: 298, width: 308, height: 64 },
  { imageUrl: tipBarIcon4, mobileWidth: 298, width: 308, height: 67 },
  { imageUrl: tipBarIcon5, mobileWidth: 298, width: 308, height: 64 },
];

export const TipBarBrands = () => {
  const { classes } = useTipBarCarouselStyles();

  const tipBarContent = TIPBAR_BRANDS_CONTENT.map((item, index) => {
    return (
      <Carousel.Slide>
        <div className='tipbarBrands__wrapper'>
          <img src={item.imageUrl} alt={`tipBarIcon${index}`} width={item.mobileWidth} height={item.height} className='tipbarBrands__icon' />
        </div>
      </Carousel.Slide>
    )
  });

  return (
    <>
      <TitleComponent
        fontSize="32px"
        fontWeight="700"
        content="Marcas Parceiras"
        margin="40px 0 24px"
      />

      <Carousel
        className={classes.tipBar}
        draggable={false}
        slideSize="40%"
        breakpoints={[
          { minWidth: '1024', slideSize: '20%', slideGap: 10 },
          { maxWidth: '768', slideSize: '55%', slideGap: 10 },
          { maxWidth: '600', slideSize: '70%', slideGap: 10 },
          { maxWidth: '475', slideSize: '90%', slideGap: 10 },
        ]}
        slideGap="sm"
        align="start"
        slidesToScroll={1}
        withIndicators={false}
        inViewThreshold={1}
        withControls={false}
        loop
      >
        {tipBarContent}
      </Carousel>
    </>
  )
}