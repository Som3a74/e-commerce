import dynamic from 'next/dynamic';
import SliderCategory from '../components/component/Category/Category';
import Hero from './../components/component/Hero/Hero';
// import PopularCategories from './../components/component/PopularCategories';
// import DiscountedBanner from './../components/component/DiscountedBanner';
import  MainSlider from './../components/component/Hero/MainSlider';

export default function Home() {
  // const Hero = dynamic(() => import('./../components/component/Hero/Hero'), {
  //   ssr: false,
  //   // loading: () => <div>Loading...</div>,
  // });


  // const MainSlider = dynamic(() => import('./../components/component/Hero/MainSlider'), {
  //   ssr: false,
  // });

  const PopularCategories = dynamic(() => import('./../components/component/PopularCategories'), {
    ssr: false,
    loading: () => <div>Loading...</div>,
  });

  const DiscountedBanner = dynamic(() => import('./../components/component/DiscountedBanner'), {
    ssr: false,
  });

  return (
    <main>
      <div className="container w-full mx-auto">
        <SliderCategory />
        <MainSlider />
        <Hero />
        <PopularCategories />
        <DiscountedBanner />
      </div>
    </main>
  );
}