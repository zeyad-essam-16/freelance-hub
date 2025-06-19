"use client";

import LinksSection from "@/components/Footer/LinksSection";
import SocialMediaSection from "./SocialMediaSection";
import CopyrightSection from "./CopyrightSection";

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 sm:px-6 lg:px-10">
      <div className="container mx-auto relative lg:min-h-[220px]">
        {/* Link Sections */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between md:gap-y-8 gap-x-10 pb-10 lg:pb-0">
          <LinksSection
            titleKey="categories"
            links={[
              { key: "webDevelopment", href: "/" },
              { key: "graphicDesign", href: "/" },
              { key: "seoOptimization", href: "/" },
              { key: "mobileApps", href: "/" },
              { key: "contentWriting", href: "/" },
              { key: "videoEditing", href: "/" },
              { key: "translation", href: "/" },
              { key: "socialMedia", href: "/" },
            ]}
          />
          <LinksSection
            titleKey="forClients"
            links={[
              { key: "yourAccount", href: "/" },
              { key: "careers", href: "/" },
              { key: "pressNews", href: "/" },
              { key: "partnerships", href: "/" },
              { key: "ipClaims", href: "/" },
            ]}
          />
          <LinksSection
            titleKey="company"
            links={[
              { key: "contact", href: "/" },
              { key: "inviteFriend", href: "/" },
              { key: "privacyPolicy", href: "/" },
              { key: "termsOfService", href: "/" },
              { key: "guides", href: "/" },
              { key: "helpSupport", href: "/" },
            ]}
          />
          <LinksSection
            titleKey="forFreelancers"
            links={[
              { key: "trustSafety", href: "/" },
              { key: "buying", href: "/" },
              { key: "selling", href: "/" },
            ]}
          />
          <LinksSection
            titleKey="businessSolutions"
            links={[
              { key: "events", href: "/" },
              { key: "communityStandards", href: "/" },
              { key: "podcast", href: "/" },
            ]}
          />
        </div>

        {/* Social Media */}
        <div className="relative lg:absolute lg:bottom-2 lg:end-0">
          <SocialMediaSection />
        </div>
      </div>
      {/* Copy right section  */}
      <CopyrightSection />
    </footer>
  );
};

export default Footer;
