import "@/styles/globals.css";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans ({subsets: ['latin']})

export default function App({ Component, pageProps }) {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className={workSans.className}>
        <Component {...pageProps} />
      </main>
      <BackToTop />
      <Footer />
    </>
);
}
