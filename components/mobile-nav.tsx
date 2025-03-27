"use client";

import {
  LayoutDashboardIcon,
  Menu,
  Package,
  Receipt,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";

export function MobileNav() {
  const pathname = usePathname();
  const params = useParams();
  const [open, setOpen] = useState(false);

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
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <VisuallyHidden>
          <SheetTitle>Menu</SheetTitle>
        </VisuallyHidden>
        <div className="px-2 py-6">
          <div className="flex items-center gap-2 font-bold text-xl mb-8">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <p className="text-xl font-bold">ClientBridge</p>
          </div>
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 text-base font-medium rounded-md transition-colors",
                  pathname === item.path
                    ? "bg-muted text-primary"
                    : "hover:bg-muted hover:text-primary"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
