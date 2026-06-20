"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { IconType } from "react-icons";
import {
  FiArrowUpRight,
  FiBarChart2,
  FiChevronDown,
  FiCompass,
  FiHelpCircle,
  FiHome,
  FiLayers,
  FiMail,
  FiMenu,
  FiMessageSquare,
  FiTrendingUp,
  FiUsers,
  FiX
} from "react-icons/fi";

import { siteConfig } from "@/lib/site-config";

type NavItem = {
  label: string;
  href: string;
  icon: IconType;
  description?: string;
};

type NavGroup = {
  label: string;
  icon: IconType;
  href?: string;
  description?: string;
  children?: NavItem[];
};

const primaryLinks: NavItem[] = [
  { label: "Home", href: "#home", icon: FiHome },
  { label: "Impact", href: "#impact", icon: FiTrendingUp },
  { label: "Why us", href: "#why-iblink", icon: FiCompass },
  { label: "Services", href: "#benefits", icon: FiLayers },
  { label: "Creators", href: "#empowering-creators", icon: FiUsers },
  { label: "FAQ", href: "#faq", icon: FiHelpCircle }
];

const navigationGroups: NavGroup[] = [
  {
    label: "Overview",
    icon: FiHome,
    children: [
      {
        label: "Home",
        href: "#home",
        icon: FiHome,
        description: "Agency intro"
      },
      {
        label: "Impact",
        href: "#impact",
        icon: FiTrendingUp,
        description: "Campaign proof"
      },
      {
        label: "Why iBlink",
        href: "#why-iblink",
        icon: FiCompass,
        description: "Differentiators"
      }
    ]
  },
  {
    label: "Solutions",
    icon: FiLayers,
    children: [
      {
        label: "Services",
        href: "#benefits",
        icon: FiLayers,
        description: "Campaign management"
      },
      {
        label: "For creators",
        href: "#empowering-creators",
        icon: FiUsers,
        description: "Creator growth"
      },
      {
        label: "FAQs",
        href: "#faq",
        icon: FiHelpCircle,
        description: "Common questions"
      }
    ]
  },
  {
    label: "Connect",
    icon: FiMessageSquare,
    children: [
      {
        label: "Contact",
        href: "#contact",
        icon: FiMessageSquare,
        description: "Start a campaign"
      }
    ]
  }
];

function flattenNavigation(groups: NavGroup[]) {
  return groups.flatMap((group) =>
    group.children ?? [
      {
        label: group.label,
        href: group.href ?? "#home",
        icon: group.icon,
        description: group.description
      }
    ]
  );
}

function getGroupIsActive(group: NavGroup, activeHref: string) {
  if (group.href === activeHref) {
    return true;
  }

  return group.children?.some((child) => child.href === activeHref) ?? false;
}

function getActiveGroupLabel(activeHref: string) {
  return navigationGroups.find((group) => getGroupIsActive(group, activeHref))?.label ?? "Overview";
}

export default function SiteNavigation() {
  const drawerRef = useRef<HTMLElement>(null);
  const allAnchorItems = useMemo(() => flattenNavigation(navigationGroups), []);
  const [activeHref, setActiveHref] = useState("#home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSidebarGroup, setOpenSidebarGroup] = useState("Overview");
  const [openMobileGroups, setOpenMobileGroups] = useState<Set<string>>(
    () => new Set(["Overview", "Solutions"])
  );

  useEffect(() => {
    const hashLinks = allAnchorItems.map((item) => item.href).filter((href) => href.startsWith("#"));
    const sectionIds = Array.from(new Set(hashLinks.map((href) => href.slice(1))));

    const updateActiveSection = () => {
      let nextHref = "#home";
      const offset = window.innerHeight < 760 ? 112 : 136;

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) {
          return;
        }

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;

        if (window.scrollY + offset >= sectionTop) {
          nextHref = `#${sectionId}`;
        }
      });

      setActiveHref(nextHref);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [allAnchorItems]);

  useEffect(() => {
    setOpenSidebarGroup(getActiveGroupLabel(activeHref));
  }, [activeHref]);

  useEffect(() => {
    document.body.classList.toggle("site-drawer-open", drawerOpen);

    if (drawerOpen) {
      window.requestAnimationFrame(() => drawerRef.current?.focus());
    }

    return () => document.body.classList.remove("site-drawer-open");
  }, [drawerOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDrawerOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleMobileGroup = (label: string) => {
    setOpenMobileGroups((currentGroups) => {
      const nextGroups = new Set(currentGroups);

      if (nextGroups.has(label)) {
        nextGroups.delete(label);
      } else {
        nextGroups.add(label);
      }

      return nextGroups;
    });
  };

  const handleNavClick = () => setDrawerOpen(false);

  return (
    <>
      <a className="skip-to-content" href="#home">
        Skip to content
      </a>

      <header className="site-header" data-navigation>
        <a className="site-header-brand" href="#home" aria-label={`${siteConfig.name} home`}>
          <span className="site-brand-mark" aria-hidden>
            <Image src="/logo.png" alt="" width={44} height={44} priority />
          </span>
          <span className="site-brand-copy">
            <strong>{siteConfig.name}</strong>
            
          </span>
        </a>

        <nav className="site-header-nav" aria-label="Primary navigation">
          {primaryLinks.map((item) => (
            <a
              key={item.href}
              className={item.href === activeHref ? "is-active" : undefined}
              href={item.href}
              aria-current={item.href === activeHref ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header-actions">
          <a className="site-icon-action" href={`mailto:${siteConfig.email}`} aria-label="Email iBlink Media">
            <FiMail aria-hidden />
          </a>
          <a className="site-header-cta" href="#contact">
            Start a campaign
            <FiArrowUpRight aria-hidden />
          </a>
          <button
            className="site-menu-button"
            type="button"
            aria-label={drawerOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={drawerOpen}
            aria-controls="mobile-navigation"
            onClick={() => setDrawerOpen((isOpen) => !isOpen)}
          >
            {drawerOpen ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
          </button>
        </div>
      </header>

      <aside className="site-sidebar" aria-label="Section navigation">
        <div className="site-sidebar-inner">
          <div className="site-sidebar-status" aria-hidden>
            <span />
            <strong>Live menu</strong>
          </div>

          <nav className="site-sidebar-nav" aria-label="Sidebar navigation">
            {navigationGroups.map((group) => {
              const groupOpen = openSidebarGroup === group.label;
              const groupActive = getGroupIsActive(group, activeHref);
              const GroupIcon = group.icon;
              const panelId = `sidebar-${group.label.toLowerCase().replace(/\s+/g, "-")}`;

              return (
                <div
                  className={`site-sidebar-group${groupOpen ? " is-open" : ""}${
                    groupActive ? " is-active" : ""
                  }`}
                  key={group.label}
                >
                  <button
                    className="site-sidebar-group-button"
                    type="button"
                    aria-expanded={groupOpen}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenSidebarGroup((currentGroup) =>
                        currentGroup === group.label ? "" : group.label
                      )
                    }
                  >
                    <GroupIcon aria-hidden />
                    <span className="site-sidebar-label">{group.label}</span>
                    <FiChevronDown className="site-sidebar-chevron" aria-hidden />
                  </button>

                  <div className="site-sidebar-subnav" id={panelId}>
                    <div>
                      {group.children?.map((item) => {
                        const ItemIcon = item.icon;
                        const itemActive = item.href === activeHref;

                        return (
                          <a
                            key={item.href}
                            href={item.href}
                            className={itemActive ? "is-active" : undefined}
                            aria-current={itemActive ? "location" : undefined}
                          >
                            <ItemIcon aria-hidden />
                            <span>
                              <strong>{item.label}</strong>
                              {item.description && <small>{item.description}</small>}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <a className="site-sidebar-contact" href="#contact" aria-label="Start a campaign">
            <FiBarChart2 aria-hidden />
            <span>Plan campaign</span>
          </a>
        </div>
      </aside>

      <div className={`site-drawer-layer${drawerOpen ? " is-open" : ""}`} aria-hidden={!drawerOpen}>
        <button
          className="site-drawer-backdrop"
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setDrawerOpen(false)}
        />

        <aside
          className="site-mobile-drawer"
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          ref={drawerRef}
          tabIndex={-1}
        >
          <div className="site-drawer-header">
            <a className="site-drawer-brand" href="#home" onClick={handleNavClick}>
              <span className="site-brand-mark" aria-hidden>
                <Image src="/logo.png" alt="" width={44} height={44} />
              </span>
              <span>
                <strong>{siteConfig.name}</strong>
                <small>Influencer marketing</small>
              </span>
            </a>

            <button
              className="site-drawer-close"
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setDrawerOpen(false)}
            >
              <FiX aria-hidden />
            </button>
          </div>

          <nav className="site-mobile-nav" aria-label="Mobile primary navigation">
            {navigationGroups.map((group) => {
              const groupOpen = openMobileGroups.has(group.label);
              const groupActive = getGroupIsActive(group, activeHref);
              const GroupIcon = group.icon;
              const panelId = `mobile-${group.label.toLowerCase().replace(/\s+/g, "-")}`;

              return (
                <div
                  className={`site-mobile-group${groupOpen ? " is-open" : ""}${
                    groupActive ? " is-active" : ""
                  }`}
                  key={group.label}
                >
                  <button
                    className="site-mobile-group-button"
                    type="button"
                    aria-expanded={groupOpen}
                    aria-controls={panelId}
                    onClick={() => toggleMobileGroup(group.label)}
                  >
                    <GroupIcon aria-hidden />
                    <span>{group.label}</span>
                    <FiChevronDown aria-hidden />
                  </button>

                  <div className="site-mobile-subnav" id={panelId}>
                    {group.children?.map((item) => {
                      const ItemIcon = item.icon;
                      const itemActive = item.href === activeHref;

                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          className={itemActive ? "is-active" : undefined}
                          aria-current={itemActive ? "location" : undefined}
                          onClick={handleNavClick}
                        >
                          <ItemIcon aria-hidden />
                          <span>
                            <strong>{item.label}</strong>
                            {item.description && <small>{item.description}</small>}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="site-drawer-actions">
            <a href={`mailto:${siteConfig.email}`} onClick={handleNavClick}>
              <FiMail aria-hidden />
              Email team
            </a>
            <a className="site-drawer-cta" href="#contact" onClick={handleNavClick}>
              Start a campaign
              <FiArrowUpRight aria-hidden />
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
