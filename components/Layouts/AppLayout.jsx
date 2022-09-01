import AppNavigation from "./AppNavigation";
import AppFooter from "./AppFooter";

function AppLayout({ children }) {
  return (
    <>
      {/* <AppNavigation />

      <main>{children}</main> */}

      <AppFooter />
    </>
  );
}

export default AppLayout;
