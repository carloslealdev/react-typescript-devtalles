import { Link, useLocation } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

export const CustomMenu = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <NavigationMenu className="py-5">
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem
          className={cn(isActive("/") && "bg-slate-200", "p-2 rounded-md")}
        >
          <Link to="/">Home</Link>
        </NavigationMenuItem>

        {/* Search */}
        <NavigationMenuItem
          className={cn(
            isActive("/search") && "bg-slate-200",
            "p-2 rounded-md",
          )}
        >
          <Link to="/search">Search heroes</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
