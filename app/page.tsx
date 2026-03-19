import Hero from "@/components/sections/Hero";
import CompanyPositioning from "@/components/sections/CompanyPositioning";
import ServicesGrid from "@/components/sections/ServicesGrid";
import SaasPreview from "@/components/sections/SaasPreview";
import CrmCapability from "@/components/sections/CrmCapability";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
// import Testimonials from "@/components/sections/Testimonials";
import TechStack from "@/components/sections/TechStack";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyPositioning />
      <ServicesGrid />
      <SaasPreview />
      <CrmCapability />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <TechStack />
      <CTASection />
    </>
  );
}
