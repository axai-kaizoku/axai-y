import { HEADER } from "@/constants";
import { Tabs, Tab } from "@nextui-org/tabs";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type TabOption = "Home" | "About" | "Portfolio" | "Resume";

type Routes = Record<TabOption, string>;

export default function DesktopNav() {
  const router = useRouter();
  const pathname = usePathname();

  const routes: Routes = {
    Home: "/",
    About: "/#about",
    Portfolio: "/#portfolio",
    Resume: "/resume",
  };

  // Initialize state based on the current path
  const [selected, setSelected] = useState<TabOption>(() => {
    if (pathname === "/") return "Home";
    if (pathname === "/#about") return "About";
    if (pathname === "/#portfolio") return "Portfolio";
    if (pathname === "/resume") return "Resume";
    return "Home"; // Default fallback
  });

  useEffect(() => {
    if (routes[selected]) {
      selected === "Resume"
        ? router.replace(routes[selected])
        : router.push(routes[selected]);
    }
  }, [selected]);

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
          <Tab
            key={title}
            as="a"
            title={title}
            // href={mainRoutes[title as TabOption]}
            // onClick={(e) => e.preventDefault()}
            className="p-2 text-base"
          />
        ))}
      </Tabs>
    </div>
  );
}

// import { HEADER } from "@/constants";
// import { Tabs, Tab } from "@nextui-org/tabs";
// import { useRouter, usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// type TabOption = "Home" | "About" | "Portfolio" | "Resume";

// type Routes = Record<TabOption, string>;

// export default function DesktopNav() {
//   const router = useRouter();
//   const pathname = usePathname();

//   const mainRoutes: Routes = {
//     Home: "/",
//     About: "/#about",
//     Portfolio: "/#portfolio",
//     Resume: "/resume",
//   };

//   // Initialize state based on the current path
//   const [selected, setSelected] = useState<TabOption>(() => {
//     if (pathname === "/") return "Home";
//     if (pathname === "/#about") return "About";
//     if (pathname === "/#portfolio") return "Portfolio";
//     if (pathname === "/resume") return "Resume";
//     return "Home"; // Default fallback
//   });

//   useEffect(() => {
//     // Sync URL change when `selected` changes
//     if (mainRoutes[selected] !== pathname) {
//       if (selected === "Resume") {
//         router.replace(mainRoutes[selected]);
//       } else {
//         router.push(mainRoutes[selected]);
//       }
//     }
//   }, [selected, router, pathname]);

//   return (
//     <div className="hidden flex-wrap gap-4 md:flex">
//       <Tabs
//         className="border-red-200"
//         variant="light"
//         aria-label="Desktop Navigation"
//         selectedKey={selected}
//         onSelectionChange={(key) => setSelected(key as TabOption)}
//       >
//         {HEADER.nav.map(({ title }) => (
//           <Tab
//             key={title}
//             as="a"
//             title={title}
//             href={mainRoutes[title as TabOption]}
//             onClick={(e) => {
//               e.preventDefault();
//               setSelected(title as TabOption); // Update selected state on click
//               router.push(mainRoutes[title as TabOption]); // Navigate programmatically
//             }}
//             className={`p-2 text-base ${selected === title ? "selected-tab-class" : ""}`}
//           />
//         ))}
//       </Tabs>
//     </div>
//   );
// }
