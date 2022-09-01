import AppLayout from "../components/Layouts/AppLayout";
import Hero from "../components/Home/Hero";
import HomeProductsSlider from "../components/Home/HomeProductsSlider";
import WhyChooseUs from "../components/Home/WhyChooseUs";

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <HomeProductsSlider />
      <WhyChooseUs />
      <div className="h-screen"></div>
    </AppLayout>
  );
}
