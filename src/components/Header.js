import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import { useMobileDevice } from "../helper/useMobileDevice";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { isMobile } = useMobileDevice();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return isMobile ? <MobileMenu open={open} setOpen={setOpen} /> : <Navbar />;
};

export default Header;
