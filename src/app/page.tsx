import FAQ from "../components/faq/FAQ";
import Navbar from "../components/navbar/Navbar";
import CenteredImage from "../components/CenteredImage";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <CenteredImage src="/Frame.svg" alt="Logo" width={217} height={207} />
        <FAQ />
      </main>
    </>
  );
}
