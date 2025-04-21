import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Other from "@/components/Other";
import Contents from "@/components/Contents";
import SectionTwo from "@/components/SectionTwo";
import EndSection from "@/components/EndSection";
import Footer from "@/components/Footer";

export default function Home() {
   return (
      <>
         <Navbar />
         <div className="container mx-auto max-w-7xl px-4">
            <Banner />
            <Hero />
            <Other />
            <Contents />
            <SectionTwo />
            <EndSection />
            <Footer />
            
         </div>
      </>
   );
}
