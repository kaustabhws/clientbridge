import { Navbar } from "@/components/navbar";
import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ freelancerId: string }>;
}>) {
  const user = await currentUser();
  const freelancerId = (await params).freelancerId;

  if (!user) {
    redirect("/sign-in");
  }

  const freelancer = await prismadb.freelancer.findUnique({
    where: {
      clerkId: user.id,
    },
  });

  if (!freelancer) {
    redirect("/setup-profile");
  }

  const isValidFreelancer = await prismadb.freelancer.findUnique({
    where: {
      id: freelancerId,
      clerkId: user.id,
    },
  });

  if (!isValidFreelancer) {
    redirect("/");
  }

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
