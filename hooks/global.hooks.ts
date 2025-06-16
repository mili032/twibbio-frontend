"use client";

import { useEffect, useState } from "react";

interface Scrolled {
  is_scrolled: boolean;
}

export const useIsScrolled = (scroll: number): Scrolled => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    is_scrolled: isScrolled,
  };
};
