import "@/styles/globals.css";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <BackToTop />
      <Footer />
    </>
);
}
