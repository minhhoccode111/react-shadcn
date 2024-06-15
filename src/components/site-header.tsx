import { useCallback, useMemo } from "react";
import { NavLink } from "react-router-dom";

import ThemeToggler from "./theme-toggler";
// import { cn } from "@/lib/utils";

function SiteHeader() {
  const links = useMemo(
    () => [
      { to: "/", text: "Home" },
      { to: "/dummy", text: "Dummy" },
      { to: "/about", text: "About" },
      { to: "/login", text: "Login" },
      { to: "/signup", text: "Signup" },
      { to: "/logout", text: "Logout" },
    ],
    [],
  );

  const navLinkStateCallback = useCallback(function ({
    isActive,
    isPending,
  }: {
    isActive: boolean;
    isPending: boolean;
  }) {
    if (isPending) return "pending";
    if (isActive) return "active";
    return "";
  }, []);

  return (
    <header className="flex justify-between items-center gap-4 p-4">
      <div className="">
        <h1 className="">Site Name</h1>
      </div>

      <nav className="">
        <ul className="flex justify-between items-center gap-2">
          {links.map((link) => (
            <NavLink
              key={link.text}
              to={link.to}
              className={navLinkStateCallback}
            >
              {link.text}
            </NavLink>
          ))}
        </ul>
      </nav>

      <ThemeToggler />
    </header>
  );
}

export default SiteHeader;
