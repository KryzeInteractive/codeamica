import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
export const Route = createRootRoute({
  component: RootComponent,
});

const noDefaultLayoutRoutes = ['/login', '/sign-up'];
function RootComponent() {
  const location = useLocation()
  return (
    <>
      {/* {!noDefaultLayoutRoutes.includes(location.pathname) && <Navbar />} */}
      <Navbar/>
      <Outlet />
      {!noDefaultLayoutRoutes.includes(location.pathname) && <Footer />}
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
