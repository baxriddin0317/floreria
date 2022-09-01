import AppLayout from "../components/Layouts/AppLayout";
import Hero from "../components/Home/Hero";
import HomeProductsSlider from "../components/Home/HomeProductsSlider";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Choose from "../components/sections/Choose";
import Jumbotron from "../components/sections/Jumbotron";
import Newsletter from "../components/sections/Newsletter";
import Nosotras from "../components/sections/Nosotras";

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <HomeProductsSlider />
      <WhyChooseUs />
      <div className="h-screen"></div>
      {/* 
      <Choose />
      <Nosotras />
      <Newsletter /> */}
    </AppLayout>
  );
}
