import { Outlet } from "react-router-dom";

import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { ThemeWrapper } from "@/components/theme-wrapper";

function SiteLayout() {
  return (
    <ThemeWrapper defaultTheme="dark" storageKey="vite-ui-theme">
      <div
        id="wrapper"
        className="flex flex-col gap-4 p-4 min-h-screen justify-between text-gray-900 bg-gray-200 dark:text-gray-200 dark:bg-gray-900"
      >
        {/* header */}
        <SiteHeader></SiteHeader>

        {/* main */}
        <main className="flex-1 self-center w-full max-w-screen-sm">
          <Outlet></Outlet>
        </main>

        {/* footer */}
        <SiteFooter></SiteFooter>
      </div>
    </ThemeWrapper>
  );
}

export default SiteLayout;
