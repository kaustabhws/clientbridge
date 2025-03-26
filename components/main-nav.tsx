import Link from "next/link";
import { cn } from "@/lib/utils";
import { LayoutDashboardIcon, Users, Package, Receipt } from "lucide-react";

// Define the navigation items with their paths, labels, and icons
export const navItems = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    path: "/clients",
    label: "Clients",
    icon: Users,
  },
  {
    path: "/projects",
    label: "Projects",
    icon: Package,
  },
  {
    path: "/invoices",
    label: "Invoices",
    icon: Receipt,
  },
];

interface MainNavProps {
  className?: string;
}

export function MainNav({ className }: MainNavProps) {
  return (
    <nav className={cn("flex items-center gap-6", className)}>
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary"
        >
          <item.icon className="h-4 w-4" />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
