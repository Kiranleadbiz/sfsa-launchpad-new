import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import ScrollProgress from "./ScrollProgress";
import PageTransition from "./PageTransition";
import ScrollToTop from "./ScrollToTop";
import WelcomeOfferPopup from "./WelcomeOfferPopup";

const Layout = ({ children }: { children: ReactNode }) => (
  <PageTransition>
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <WelcomeOfferPopup />
    </div>
  </PageTransition>
);

export default Layout;
