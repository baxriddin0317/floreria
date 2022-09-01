import AppNavigation from "./AppNavigation";
import Footer from "./Footer";

function AppLayout({ children }) {
  return (
    <>
      <AppNavigation />

      <main>{children}</main>

      {/* <Footer /> */}
    </>
  );
}

export default AppLayout;
