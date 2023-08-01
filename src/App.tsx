import './App.css';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { InfoCard } from './components/infoCard/infoCard';
import { Newsletter } from './components/newsletter/newsletter';
import { NewsLetterModal } from './components/newsletter/newsletterModal/newsletterModal';
import { NotificationBar } from './components/notificationBar/notificationBar';
import { HomeProductShelf } from './components/shelfs/home/homeProductShelf';
import { SliderLayout } from './components/sliderLayout/sliderLayout';
import { TipBarBrands } from './components/tipBarBrands/tipbarBrands';
import { TipBar } from './components/tipbar/tipbar';

export const Home = () => {
  return (
    <>
      <NewsLetterModal />
      <NotificationBar />
      <Header />
      <SliderLayout />
      <TipBar />
      <TipBarBrands />
      <HomeProductShelf />
      <InfoCard />
      <Newsletter />
      <Footer />
    </>
  )
}
