"use client";

import Link from "next/link";
import { BellIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="flex h-16 items-center justify-between">
        {/* Left section - Logo */}
        <div className="flex items-center gap-2">
          <MobileNav />
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <p className="text-xl font-bold">ClientBridge</p>
          </Link>
        </div>

        {/* Middle section - Navigation (hidden on mobile) */}
        <div className="hidden md:flex md:justify-center md:flex-1">
          <MainNav />
        </div>

        {/* Right section - Action icons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <BellIcon className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <UserButton />
        </div>
      </div>
    </header>
  );
}
