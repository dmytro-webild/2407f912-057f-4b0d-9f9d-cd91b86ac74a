"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Sparkles, Home, Shield, Award, Star, Mail, TrendingUp, DollarSign, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="mediumSmall"
      sizing="mediumLarge"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Elite Interiors"
          navItems={[
            { name: "Properties", id: "properties" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Team", id: "team" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Get Your Personalized Property Guide", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Exquisite Interior Design for Elite Residences"
          description="We are a boutique design agency providing personalized, elevated styling with exclusive off-market access to curated materials and custom furnishings."
          background={{ variant: "gradient-bars" }}
          tag="Boutique Agency"
          tagIcon={Sparkles}
          buttons={[
            { text: "Explore Designs", href: "properties" },
            { text: "Get Your Personalized Property Guide", href: "contact" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://img.b2bpic.net/free-photo/modern-spacious-room-with-large-panoramic-window_7502-7289.jpg?_wi=1",              imageAlt: "Luxury interior design"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/shanghai-night-china_1127-3170.jpg?_wi=1",              imageAlt: "Boutique design space"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920926.jpg?_wi=1",              imageAlt: "High-end finishes"
            }
          ]}
          mediaAnimation="slide-up"
        />
      </div>

      <div id="properties" data-section="properties">
        <ProductCardFour
          title="Curated Design Projects"
          description="Showcasing our latest bespoke interior projects, blending timeless elegance with modern sophistication."
          tag="Boutique Collections"
          tagIcon={Home}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          carouselMode="buttons"
          buttons={[
            { text: "See all designs", href: "#" }
          ]}
          products={[
            {
              id: "1",              name: "Penthouse Sanctuary",              price: "Custom Design",              variant: "Bespoke Modern",              imageSrc: "https://img.b2bpic.net/free-photo/shanghai-night-china_1127-3170.jpg?_wi=2",              imageAlt: "Modern interior penthouse"
            },
            {
              id: "2",              name: "Villa Grandeur",              price: "Custom Design",              variant: "Classic Contemporary",              imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920926.jpg?_wi=2",              imageAlt: "Contemporary villa design"
            },
            {
              id: "3",              name: "Urban Minimalist",              price: "Custom Design",              variant: "Minimalist Chic",              imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920931.jpg?_wi=2",              imageAlt: "Minimalist urban apartment"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Your Boutique Interior Design Partner"
          description="With over a decade of design excellence, our boutique agency delivers personalized, high-end interior solutions. We pride ourselves on sourcing rare materials and utilizing off-market design resources to craft spaces that perfectly reflect your lifestyle."
          tag="About Us"
          imageSrc="https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920926.jpg?_wi=3"
          imageAlt="Design Studio Team"
          useInvertedBackground={false}
          buttons={[
            { text: "Meet the Designers", href: "#" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardThree
          title="Bespoke Services"
          description="Tailored design packages focusing on detail, exclusivity, and quality craftsmanship."
          tag="Our Services"
          tagIcon={Shield}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          gridVariant="uniform-all-items-equal"
          carouselMode="buttons"
          features={[
            {
              id: "01",              title: "Concept Development",              description: "Unique design narratives tailored to your vision",              imageSrc: "https://img.b2bpic.net/free-photo/modern-spacious-room-with-large-panoramic-window_7502-7289.jpg?_wi=3"
            },
            {
              id: "02",              title: "Bespoke Sourcing",              description: "Access to off-market furnishings and rare fixtures",              imageSrc: "https://img.b2bpic.net/free-photo/shanghai-night-china_1127-3170.jpg?_wi=3"
            },
            {
              id: "03",              title: "Project Management",              description: "End-to-end management ensuring aesthetic perfection",              imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920926.jpg?_wi=4"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Design Leadership"
          description="Our visionary designers committed to craftsmanship."
          tag="The Team"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          members={[
            {
              id: "1",              name: "Elena Vance",              role: "Creative Director",              imageSrc: "https://img.b2bpic.net/free-photo/attractive-satisfied-young-female-entrepreneur-standing-proud-smiling-with-crossed-hands-confident_197531-23012.jpg?id=13871705"
            },
            {
              id: "2",              name: "Julian Thorne",              role: "Lead Designer",              imageSrc: "https://img.b2bpic.net/free-photo/young-businessman-with-clipboard_1098-602.jpg"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Curated Experiences"
          description="Hear from our clients who transformed their homes into bespoke sanctuaries."
          tag="Testimonials"
          tagIcon={Star}
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              name: "Client A",              date: "2024",              title: "Exceptional Taste",              quote: "The bespoke furniture sourcing provided a level of exclusivity I couldn't find anywhere else.",              tag: "Project A",              avatarSrc: "https://img.b2bpic.net/free-photo/business-people-using-digital-tablet-airport_107420-95868.jpg",              imageSrc: "https://img.b2bpic.net/free-photo/shanghai-night-china_1127-3170.jpg?_wi=5"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get In Touch"
          tagIcon={Mail}
          title="Transform Your Space"
          description="Ready to begin your journey? Contact us to discuss your vision."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          buttons={[
            { text: "Get Your Personalized Property Guide", href: "#" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            { title: "Design", items: [{ label: "About", href: "#about" }, { label: "Portfolio", href: "#properties" }] },
            { title: "Services", items: [{ label: "Bespoke Sourcing", href: "#services" }] }
          ]}
          bottomLeftText="© 2025 Elite Interiors. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
