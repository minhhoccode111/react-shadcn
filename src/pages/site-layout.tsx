import { Outlet } from "react-router-dom";

import SiteFooter from "@c/site-footer";
import SiteHeader from "@c/site-header";

function SiteLayout() {
  return (
    // make this div theme toggler
    <div className="flex flex-col min-h-screen justify-between">
      {/* header */}
      <SiteHeader></SiteHeader>

      {/* main */}
      <main className="flex-1">
        <Outlet></Outlet>
      </main>

      {/* footer */}
      <SiteFooter></SiteFooter>
    </div>
  );
}

export default SiteLayout;
