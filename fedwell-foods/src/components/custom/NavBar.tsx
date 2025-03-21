import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NavLink } from "./NavLink";

export function NavBar({
  overviewRef,
  contactRef,
}: {
  overviewRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [homeRef, setHomeRef] = useState<React.RefObject<HTMLDivElement | null> | null>(null);

  useEffect(() => {
    setHomeRef({ current: document.body as HTMLDivElement });
  }, []);
  return (
    <nav className="w-full bg-white py-4 shadow-md sticky top-0 z-50 border-none">
      <div className="container mx-auto flex  items-center px-4">
        {/* LOGO */}
        <Link className="flex items-center pr-2" href="/">
          <Image
            aria-hidden
            src="/improved-fedwell-foods.png"
            alt="Fedwell Foods Logo"
            width={80}
            height={80}
          />
        </Link>

        {/* NAV LINKS */}
        <div className="flex space-x-4">
          {homeRef && <NavLink text="Home" targetRef={homeRef} />}
          <NavLink text="Overview" targetRef={overviewRef} />
          <NavLink text="Contact" targetRef={contactRef} />
        </div>
      </div>
    </nav>
  );
}
