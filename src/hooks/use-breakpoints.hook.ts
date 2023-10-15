"use client";

import { useMediaQuery } from "react-responsive";

const useBreakpoints = () => {
  const isDesktop = useMediaQuery({ minWidth: 1920 });
  const isLaptop = useMediaQuery({ minWidth: 1440, maxWidth: 1920 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return { isDesktop, isLaptop, isTablet, isMobile };
};

export default useBreakpoints;
