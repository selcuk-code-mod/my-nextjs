import { AppProps } from "next/app";
import FAQ from "../components/faq/FAQ";
import Navbar from "../components/navbar/Navbar";
import { Montserrat } from "next/font/google";
import Footer from "@/components/footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weights: [400, 700],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={montserrat.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="homePage">
        <Navbar />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
