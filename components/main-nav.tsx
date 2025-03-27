import Link from "next/link";
import { cn } from "@/lib/utils";
import { LayoutDashboardIcon, Users, Package, Receipt } from "lucide-react";
import { useParams, usePathname } from "next/navigation";

interface MainNavProps {
  className?: string;
}

export function MainNav({ className }: MainNavProps) {
  const pathname = usePathname();
  const params = useParams();

  // Define the navigation items with their paths, labels, and icons
  const navItems = [
    {
      path: `/${params?.freelancerId}`,
      label: "Dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      path: `/${params?.freelancerId}/clients`,
      label: "Clients",
      icon: Users,
    },
    {
      path: `/${params?.freelancerId}/projects`,
      label: "Projects",
      icon: Package,
    },
    {
      path: `/${params?.freelancerId}/invoices`,
      label: "Invoices",
      icon: Receipt,
    },
  ];

  return (
    <nav className={cn("flex items-center gap-6", className)}>
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary ${
            pathname === item.path ? "text-primary" : "text-gray-500"
          }`}
        >
          <item.icon className="h-4 w-4" />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
