export type SiteConfig = typeof siteConfig;
export const siteConfig = {
  name: "description",
  description: "Complete solution for streamlined recruitment and onboarding platform designed to transform the way companies manage their hiring processes. It offers a comprehensive suite of tools to ensure a smooth onboarding experience for new hires.",
  navItems: [
    {
      label: "Features",
      href: "/features",
    },
    {
      label: "Solutions",
      href: "/solutions",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Resources",
      href: "/resources",
      subItems: [
        {
          label: "Blog",
          href: "/resources/blog",
        },
        {
          label: "Guides",
          href: "/resources/guides",
        },
        {
          label: "Case Studies",
          href: "/resources/case-studies",
        },
      ],
    },
  ],
  navMenuItems: [
    {
      label: "Features",
      href: "/features",
    },
    {
      label: "Solutions",
      href: "/solutions",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Resources",
      href: "/resources",
    },
  ],
  links: {
    github: "/",
    twitter: "/",
    docs: "/",
    discord: "/",
    sponsor: "/",
  },
};
