import AppLayout from "../components/Layouts/AppLayout";
import Hero from "../components/Home/Hero";
import HomeProductsSlider from "../components/Home/HomeProductsSlider";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import WeAre from "../components/Home/WeAre";

export default function Home() {
  return (
    <AppLayout>
      {/* <Hero />
      <HomeProductsSlider />
      <WhyChooseUs /> */}
      <WeAre />
    </AppLayout>
  );
}
