import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import FooterPage from "@/components/FooterPage";
import HeroPage from "@/components/HeroPage";
import NavbarPage from "@/components/NavbarPage";
import FooterContact from "@/components/NewPage";
import PortfolioPage from "@/components/PortfolioPage";
import InfiniteScroll from "@/components/Slidepage";
export default function Home() {
  return (
    <>
      <NavbarPage />
      <HeroPage />
      <InfiniteScroll />
      <PortfolioPage />
      <AboutPage />
      <ContactPage />
      <FooterContact/>
      <FooterPage />
    </>

  );
}
