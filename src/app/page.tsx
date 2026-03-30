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
          brandName="Luxe Properties"
          navItems={[
            { name: "Properties", id: "properties" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Team", id: "team" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Schedule Viewing", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Discover Luxury Living in Dubai"
          description="High-yield investment opportunities and world-class residences. Achieve superior ROI while enjoying an unparalleled lifestyle of luxury and exclusivity."
          background={{ variant: "gradient-bars" }}
          tag="Premium Collections"
          tagIcon={Sparkles}
          buttons={[
            { text: "Explore Properties", href: "properties" },
            { text: "Contact Agent", href: "contact" }
          ]}
          mediaItems={[
            { imageSrc: "https://img.b2bpic.net/free-photo/modern-spacious-room-with-large-panoramic-window_7502-7289.jpg?_wi=1", imageAlt: "Luxury penthouse in Dubai Marina" },
            { imageSrc: "https://img.b2bpic.net/free-photo/shanghai-night-china_1127-3170.jpg?_wi=1", imageAlt: "Dubai skyline at night" },
            { imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920926.jpg?_wi=1", imageAlt: "Modern luxury exterior design" },
            { imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920931.jpg?_wi=1", imageAlt: "Contemporary luxury architecture" },
            { imageSrc: "https://img.b2bpic.net/free-photo/modern-spacious-room-with-large-panoramic-window_7502-7289.jpg?_wi=2", imageAlt: "Spacious modern interior with panoramic view" }
          ]}
          mediaAnimation="slide-up"
        />
      </div>

      <div id="properties" data-section="properties">
        <ProductCardFour
          title="Featured Properties"
          description="Handpicked luxury properties showcasing the finest real estate opportunities in Dubai's most prestigious locations."
          tag="Exclusive Listings"
          tagIcon={Home}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          carouselMode="buttons"
          buttons={[{ text: "See all properties", href: "/properties" }]}
          products={[
            { id: "1", name: "Palm Jumeirah Villa", price: "AED 12,500,000", variant: "5 Bed Villa | Beachfront", imageSrc: "https://img.b2bpic.net/free-photo/shanghai-night-china_1127-3170.jpg?_wi=2", imageAlt: "Luxury villa on Palm Jumeirah" },
            { id: "2", name: "Downtown Dubai Penthouse", price: "AED 8,750,000", variant: "4 Bed Penthouse | City View", imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920926.jpg?_wi=2", imageAlt: "Modern penthouse in Downtown Dubai" },
            { id: "3", name: "Emirates Hills Townhouse", price: "AED 6,200,000", variant: "4 Bed Townhouse | Golf View", imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920931.jpg?_wi=2", imageAlt: "Contemporary townhouse in Emirates Hills" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Your Trusted Dubai Real Estate Partner"
          description="With over 15 years of excellence in Dubai's luxury real estate market, we have established ourselves as the premier boutique agency for discerning international clientele."
          tag="About Us"
          imageSrc="https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920926.jpg?_wi=3"
          useInvertedBackground={false}
          buttons={[{ text: "Learn Our Story", href: "#" }]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardThree
          title="Our Services & Expertise"
          description="Comprehensive real estate solutions tailored to meet your unique needs and aspirations."
          tag="Professional Services"
          tagIcon={Shield}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          gridVariant="uniform-all-items-equal"
          features={[
            { id: "01", title: "Property Selection", description: "Exclusive access to off-market and hand-selected luxury properties", imageSrc: "https://img.b2bpic.net/free-photo/modern-spacious-room-with-large-panoramic-window_7502-7289.jpg?_wi=3" },
            { id: "02", title: "Investment Advisory", description: "Expert insights into market trends and investment opportunities", imageSrc: "https://img.b2bpic.net/free-photo/shanghai-night-china_1127-3170.jpg?_wi=3" },
            { id: "03", title: "Negotiation & Closing", description: "Strategic negotiation and seamless transaction management", imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920926.jpg?_wi=4" },
            { id: "04", title: "Legal Compliance", description: "Full support with documentation, permits, and regulatory compliance", imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920931.jpg?_wi=3" },
            { id: "05", title: "Property Management", description: "Professional management services for rental income optimization", imageSrc: "https://img.b2bpic.net/free-photo/modern-spacious-room-with-large-panoramic-window_7502-7289.jpg?_wi=4" },
            { id: "06", title: "Concierge Services", description: "White-glove concierge support for renovations and lifestyle services", imageSrc: "https://img.b2bpic.net/free-photo/shanghai-night-china_1127-3170.jpg?_wi=4" }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Executive Team"
          description="Meet the visionary leaders guiding Luxe Properties with expertise and dedication."
          tag="Our Leadership"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            { id: "1", name: "Hassan Al-Maktoum", role: "Chief Executive Officer", imageSrc: "https://img.b2bpic.net/free-photo/business-people-using-digital-tablet-airport_107420-95868.jpg" },
            { id: "2", name: "Layla Al-Mansoori", role: "Chief Operating Officer", imageSrc: "https://img.b2bpic.net/free-photo/attractive-satisfied-young-female-entrepreneur-standing-proud-smiling-with-crossed-hands-confident_197531-23012.jpg?id=13871705" },
            { id: "3", name: "Marcus Wellington", role: "Chief Investment Officer", imageSrc: "https://img.b2bpic.net/free-photo/young-businessman-with-clipboard_1098-602.jpg" }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="By The Numbers"
          description="Our proven track record speaks to our commitment and success in Dubai's luxury real estate market."
          tag="Track Record"
          tagIcon={Award}
          animationType="slide-up"
          metrics={[
            { id: "1", icon: Home, title: "Properties Sold", value: "450+" },
            { id: "2", icon: Users, title: "Satisfied Clients", value: "650+" },
            { id: "3", icon: DollarSign, title: "Total Value", value: "$2.3B" },
            { id: "4", icon: TrendingUp, title: "International", value: "45 Countries" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="What Our Clients Say"
          description="Experience through the words of satisfied buyers and investors who found their dream properties with us."
          tag="Client Testimonials"
          tagIcon={Star}
          testimonials={[
            { id: "1", name: "Ahmed Al Mansouri", date: "Sept 2024", title: "Market Expertise", quote: "Outstanding market knowledge and negotiation skills.", tag: "Investor", avatarSrc: "https://img.b2bpic.net/free-photo/business-people-using-digital-tablet-airport_107420-95868.jpg" },
            { id: "2", name: "Sarah Johnson", date: "Aug 2024", title: "Smooth Experience", quote: "Professionalism and attention to detail were impeccable.", tag: "CEO", avatarSrc: "https://img.b2bpic.net/free-photo/attractive-satisfied-young-female-entrepreneur-standing-proud-smiling-with-crossed-hands-confident_197531-23012.jpg?id=13871705" }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get In Touch"
          tagIcon={Mail}
          title="Ready to Find Your Dream Property?"
          description="Let our expert team guide you through your luxury real estate journey."
          background={{ variant: "sparkles-gradient" }}
          buttons={[
            { text: "Get Your Personalized Property Guide", href: "#" },
            { text: "Browse Listings", href: "#properties" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            { title: "Company", items: [{ label: "About", href: "#about" }, { label: "Contact", href: "#contact" }] },
            { title: "Legal", items: [{ label: "Terms", href: "#" }, { label: "Privacy", href: "#" }] }
          ]}
          bottomLeftText="© 2025 Luxe Properties."
        />
      </div>
    </ThemeProvider>
  );
}
