"use client";

import { useEffect } from "react";

function observeElements(selector: string, className: string, threshold = 0.15) {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
  if (!elements.length) {
    return () => undefined;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
        }
      });
    },
    { threshold }
  );

  elements.forEach((element) => observer.observe(element));
  return () => observer.disconnect();
}

export default function PageEffects() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    cleanups.push(observeElements(".timeline-step, .minimal-step, .move-in", "visible"));
    cleanups.push(observeElements(".fade-in, .fade-in-delayed", "show", 0.1));

    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        '[data-navigation] a[href^="#"], .site-sidebar a[href^="#"], .site-mobile-drawer a[href^="#"], footer a[href^="#"]'
      )
    );
    const sectionMap = new Map<string, HTMLElement>();

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");

      if (!href) {
        return;
      }

      const section = document.querySelector<HTMLElement>(href);

      if (section) {
        sectionMap.set(href, section);
      }
    });

    const sections = Array.from(sectionMap.entries());

    const onScroll = () => {
      const scrollPosition = window.scrollY + 120;
      let activeHref = sections[0]?.[0] ?? "";

      sections.forEach(([href, section]) => {
        if (section.offsetTop <= scrollPosition) {
          activeHref = href;
        }
      });

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === activeHref);
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    const header = document.querySelector<HTMLElement>(".site-header, header");
    let lastScroll = 0;
    const onHeaderScroll = () => {
      if (!header) {
        return;
      }

      if (window.scrollY > 30) {
        header.classList.add("scrolled");
        header.classList.toggle("glow", window.scrollY - lastScroll > 10);
      } else {
        header.classList.remove("scrolled");
        header.classList.remove("glow");
      }

      lastScroll = window.scrollY;
    };
    window.addEventListener("scroll", onHeaderScroll);
    cleanups.push(() => window.removeEventListener("scroll", onHeaderScroll));

    const hero = document.querySelector<HTMLElement>(".parallax-tilt");
    const onHeroMove = (event: MouseEvent) => {
      if (!hero) {
        return;
      }

      const rect = hero.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = ((x - centerX) / centerX) * 10;
      const tiltY = ((y - centerY) / centerY) * 10;
      hero.style.transform = `perspective(900px) rotateY(${-tiltX}deg) rotateX(${tiltY}deg)`;
    };
    const onHeroLeave = () => {
      if (hero) {
        hero.style.transform = "";
      }
    };

    hero?.addEventListener("mousemove", onHeroMove);
    hero?.addEventListener("mouseleave", onHeroLeave);
    cleanups.push(() => {
      hero?.removeEventListener("mousemove", onHeroMove);
      hero?.removeEventListener("mouseleave", onHeroLeave);
    });

    const makeDraggableMarquee = (id: string) => {
      const marquee = document.getElementById(id);
      if (!marquee) {
        return () => undefined;
      }

      let isDragging = false;
      let startX = 0;
      let scrollLeft = 0;

      const startDrag = (pageX: number) => {
        isDragging = true;
        startX = pageX - marquee.offsetLeft;
        scrollLeft = marquee.scrollLeft;
      };

      const stopDrag = () => {
        isDragging = false;
      };

      const onMouseDown = (event: MouseEvent) => startDrag(event.pageX);
      const onMouseMove = (event: MouseEvent) => {
        if (!isDragging) {
          return;
        }

        event.preventDefault();
        const x = event.pageX - marquee.offsetLeft;
        marquee.scrollLeft = scrollLeft - (x - startX) * 1.2;
      };
      const onTouchStart = (event: TouchEvent) => startDrag(event.touches[0].pageX);
      const onTouchMove = (event: TouchEvent) => {
        if (!isDragging) {
          return;
        }

        const x = event.touches[0].pageX - marquee.offsetLeft;
        marquee.scrollLeft = scrollLeft - (x - startX) * 1.2;
      };

      marquee.addEventListener("mousedown", onMouseDown);
      marquee.addEventListener("mouseleave", stopDrag);
      marquee.addEventListener("mouseup", stopDrag);
      marquee.addEventListener("mousemove", onMouseMove);
      marquee.addEventListener("touchstart", onTouchStart);
      marquee.addEventListener("touchend", stopDrag);
      marquee.addEventListener("touchmove", onTouchMove);

      return () => {
        marquee.removeEventListener("mousedown", onMouseDown);
        marquee.removeEventListener("mouseleave", stopDrag);
        marquee.removeEventListener("mouseup", stopDrag);
        marquee.removeEventListener("mousemove", onMouseMove);
        marquee.removeEventListener("touchstart", onTouchStart);
        marquee.removeEventListener("touchend", stopDrag);
        marquee.removeEventListener("touchmove", onTouchMove);
      };
    };

    cleanups.push(makeDraggableMarquee("brand-marquee-1"));

    const fill = document.getElementById("minimal-timeline-fill");
    const minimalSteps = Array.from(document.querySelectorAll(".minimal-step"));
    const updateFill = () => {
      if (!fill || !minimalSteps.length) {
        return;
      }

      const visibleCount = minimalSteps.filter((step) => step.classList.contains("visible")).length;
      fill.setAttribute("style", `height:${(visibleCount / minimalSteps.length) * 100}%`);
    };

    window.addEventListener("scroll", updateFill);
    window.setTimeout(updateFill, 600);
    cleanups.push(() => window.removeEventListener("scroll", updateFill));

    const flipCards = Array.from(document.querySelectorAll<HTMLElement>(".flip-kpi"));
    const flipHandlers = flipCards.map((card) => {
      const onClick = () => {
        if (window.innerWidth <= 900) {
          card.classList.toggle("flipped");
        }
      };
      const onKeyDown = (event: KeyboardEvent) => {
        if (window.innerWidth <= 900 && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          card.classList.toggle("flipped");
        }
      };

      card.addEventListener("click", onClick);
      card.addEventListener("keydown", onKeyDown);
      return () => {
        card.removeEventListener("click", onClick);
        card.removeEventListener("keydown", onKeyDown);
      };
    });

    cleanups.push(...flipHandlers);

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
