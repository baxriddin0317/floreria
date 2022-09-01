import Hero from "../components/Home/Hero";
import AppLayout from "../components/Layouts/AppLayout";
import Choose from "../components/sections/Choose";
import Jumbotron from "../components/sections/Jumbotron";
import Newsletter from "../components/sections/Newsletter";
import Nosotras from "../components/sections/Nosotras";
import Product from "../components/sections/Product";

export default function Home() {
  return (
    <AppLayout>
      <Hero />

      <div className="h-screen"></div>
      {/* <Jumbotron /> */}
      {/* <Product />
      <Choose />
      <Nosotras />
      <Newsletter /> */}
    </AppLayout>
  );
}
