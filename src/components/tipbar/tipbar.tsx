import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import './styles.css';
import tipBarIcon1 from '../../assets/Tipbar01.svg';
import tipBarIcon2 from '../../assets/Tipbar02.svg';
import tipBarIcon3 from '../../assets/Tipbar03.svg';
import tipBarIcon4 from '../../assets/Tipbar04.svg';
import tipBarIcon5 from '../../assets/Tipbar05.svg';
import { Carousel } from '@mantine/carousel';
import { TitleComponent } from '../titleComponent/titleComponent';
import { useTipBarCarouselStyles } from './tipbarCarouselStyles';

interface Banner {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const TIPBAR_CONTENT: Banner[] = [
  { title: "Produtos importados", subtitle: "Produto de Alta Qualidade", imageUrl: tipBarIcon1 },
  { title: "Estoque no Brasil", subtitle: "Produtos mais perto de você!", imageUrl: tipBarIcon2 },
  { title: "Trocas Garantidas", subtitle: "Trocas em até 48 horas, veja as regras", imageUrl: tipBarIcon3 },
  { title: "Ganhe 5% off", subtitle: "Pagando à vista no Cartão", imageUrl: tipBarIcon4 },
  { title: "Frete Grátis", subtitle: "Em compras acima de R$ 499,00", imageUrl: tipBarIcon5 },
  { title: "Produtos importados", subtitle: "Produto de Alta Qualidade", imageUrl: tipBarIcon1 },
  { title: "Estoque no Brasil", subtitle: "Produtos mais perto de você!", imageUrl: tipBarIcon2 },
  { title: "Trocas Garantidas", subtitle: "Trocas em até 48 horas, veja as regras", imageUrl: tipBarIcon3 },
  { title: "Ganhe 5% off", subtitle: "Pagando à vista no Cartão", imageUrl: tipBarIcon4 },
  { title: "Frete Grátis", subtitle: "Em compras acima de R$ 499,00", imageUrl: tipBarIcon5 },
];

export const TipBar = () => {
  const { classes } = useTipBarCarouselStyles();
  const autoplay = React.useRef(Autoplay({ delay: 3000, }));

  const tipBarContent = TIPBAR_CONTENT.map((item, index) => {
    return (
      <Carousel.Slide>
        <div className='tipbar__wrapper'>
          <img src={item.imageUrl} alt={`tipBarIcon${index}`} className='tipbar__icon' />
          <div className='tipbar__right_col'>
            <p className='tipbar__title'><b>{item.title}</b></p>
            <p className='tipbar__subtitle'>{item.subtitle}</p>
          </div>
        </div>
      </Carousel.Slide>
    )
  });

  return (
    <>
      <TitleComponent
        fontSize="16px"
        fontWeight="700"
        content="Por que comprar na Maeztra?"
        margin="24px 0 21px"
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
        inViewThreshold={0.1}
        withControls={false}
        plugins={[autoplay.current]}
        loop
      >
        {tipBarContent}
      </Carousel>
    </>
  )
}