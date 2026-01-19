import Hero from "@/components/home/Hero";
import FeaturedPackages from "@/components/home/FeaturedPackages";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import QuoteModal from "@/components/common/QuoteModal";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedPackages />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <FAQ />
      <QuoteModal />
    </main>
  );
}
