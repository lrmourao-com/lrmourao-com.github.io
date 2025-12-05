export const scrollToSection = (nav: boolean, id: string) => {
  let targetId = id;

  // Check if we are on mobile (Tailwind sm breakpoint is 640px)
  // And if a mobile specific element exists
  if (typeof window !== "undefined" && window.innerWidth < 640) {
    const mobileEl = document.getElementById(`${id}-mobile`);
    if (mobileEl) {
      targetId = `${id}-mobile`;
    }
  }

  const el = document.getElementById(targetId);
  if (el) {
    // Use offset for specific service cards (specializations), simple scroll for main sections

    if (!nav) {
      const headerOffset = 120; // Account for fixed header height (96px) + some padding
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset -
        headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      // Simple scroll for main navigation sections
      el.scrollIntoView({ behavior: "smooth" });
    }
    
    return true; // Return true to indicate successful scroll initiation
  }
  return false;
};
