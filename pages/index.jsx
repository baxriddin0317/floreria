import Hero from "../components/Home/Hero";
import HomeProductsSlider from "../components/Home/HomeProductsSlider";
import AppLayout from "../components/Layouts/AppLayout";
import Choose from "../components/sections/Choose";
import Jumbotron from "../components/sections/Jumbotron";
import Newsletter from "../components/sections/Newsletter";
import Nosotras from "../components/sections/Nosotras";

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <HomeProductsSlider />
      <div className="h-screen"></div>
      {/* 
      <Choose />
      <Nosotras />
      <Newsletter /> */}
    </AppLayout>
  );
}
