import { Footer } from "../components/Footer";
import { SiteNavBar } from "../components/SiteNavBar";
import useTitle from "../hooks/useTitle";

export const Layout = ({pagina, children}) => {
  useTitle(pagina);
  return (
    <>
      <SiteNavBar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
