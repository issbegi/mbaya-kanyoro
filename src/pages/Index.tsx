import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhoWeHelp from "@/components/WhoWeHelp";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import ClientLogos from "@/components/ClientLogos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";


const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <WhoWeHelp />
        <Team />
        <Testimonials />
        <ClientLogos />
        <Contact />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
