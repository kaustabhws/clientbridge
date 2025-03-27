import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

const HomeNavbar = async () => {
  const user = await currentUser();

  const freelancer = await prismadb.freelancer.findFirst({
    where: {
      clerkId: user?.id,
    },
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 backdrop-blur-xl /50 min-[540px]:px-6 border-b">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <p className="text-xl font-bold">ClientBridge</p>
        </div>
        <div className="flex items-center gap-2 max-[500px]:hidden">
          <ModeToggle />
          <Link href="/sign-in">
            {user ? (
              <SignOutButton>
                <Button variant="ghost">Log Out</Button>
              </SignOutButton>
            ) : (
              <Button variant="ghost">Login</Button>
            )}
          </Link>
          <Link href={user ? `/dashboard/${freelancer?.id}` : "/sign-up"}>
            <Button>{user ? "Dashboard" : "Get Started - It's Free"}</Button>
          </Link>
        </div>
        <div className="hidden max-[500px]:block">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default HomeNavbar;
