import { HEADER } from "@/constants";
import { Tabs, Tab } from "@nextui-org/tabs";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type TabOption = "Home" | "About" | "Portfolio" | "Resume";

type Routes = Record<TabOption, string>;

export default function DesktopNav() {
  const router = useRouter();
  const pathname = usePathname();

  // Initialize state based on the current path
  const [selected, setSelected] = useState<TabOption>(() => {
    if (pathname === "/") return "Home";
    if (pathname === "/#about") return "About";
    if (pathname === "/#portfolio") return "Portfolio";
    if (pathname === "/resume") return "Resume";
    return "Home"; // Default fallback
  });

  useEffect(() => {
    const routes: Routes = {
      Home: "/",
      About: "/#about",
      Portfolio: "/#portfolio",
      Resume: "/resume",
    };

    if (routes[selected]) {
      selected === "Resume"
        ? router.replace(routes[selected])
        : router.push(routes[selected]);
    }
  }, [selected, router]);

  return (
    <div className="hidden flex-wrap gap-4 md:flex">
      <Tabs
        className="border-red-200"
        variant="light"
        aria-label="Desktop Navigation"
        selectedKey={selected}
        onSelectionChange={(key) => setSelected(key as TabOption)}
      >
        {HEADER.nav.map(({ title }) => (
          <Tab className="p-2 text-base" key={title} title={title} />
        ))}
      </Tabs>
    </div>
  );
}
