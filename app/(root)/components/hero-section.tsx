import { Button } from "@/components/ui/button";
import { InteractiveGrid } from "./interactive-grid";
import { Play, ArrowRight } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import prismadb from "@/lib/prismadb";
import Link from "next/link";

export async function HeroSection() {
  const user = await currentUser();

  const freelancer = await prismadb.freelancer.findFirst({
    where: {
      clerkId: user?.id,
    },
  });

  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden ">
      <InteractiveGrid
        containerClassName="absolute inset-0"
        className="opacity-30"
        points={40}
      />
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Manage Your Freelance Business
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            All in One Place
          </span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          ClientBridge helps freelancers track projects, manage clients, and
          send professional invoices—all from a single, intuitive dashboard.
        </p>
        <div className="flex gap-4 justify-center max-[375px]:flex-col">
          <Button
            variant="outline"
            className="gap-2 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          >
            <Play className="w-4 h-4" />
            Watch Demo
          </Button>
          <Link href={user ? `/${freelancer?.id}/` : "/sign-up"}>
            <Button>
              {user ? "Dashboard" : "Get Started"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="bg-gradient-to-b from-blue-900/20 to-purple-900/20 w-full aspect-[16/9] flex items-center justify-center p-8">
          {/* MacBook Mockup */}
          <div className="relative w-full max-w-4xl mx-auto">
            {/* MacBook Body */}
            <div className="relative aspect-[16/10] bg-gray-800 rounded-lg overflow-hidden shadow-xl">
              {/* MacBook Screen Bezel */}
              <div className="absolute inset-0 border-[12px] border-gray-800 rounded-lg">
                {/* MacBook Screen */}
                <div className="relative w-full h-full bg-gray-900 overflow-hidden">
                  {/* Camera/Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-1.5 bg-gray-800 rounded-b-lg z-10"></div>

                  {/* Screen Content - Placeholder for future image */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/40 to-purple-900/40">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2">
                        ClientBridge Dashboard
                      </h3>
                      <p className="text-sm text-gray-400">
                        Your image will appear here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MacBook Base/Keyboard */}
            <div className="relative h-[20px] bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg mx-[10%]">
              {/* Trackpad */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-600 rounded-b"></div>
            </div>

            {/* MacBook Shadow */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[80%] h-[15px] /40 blur-md rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
