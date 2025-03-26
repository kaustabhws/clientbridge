import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const freelancer = await prismadb.freelancer.findUnique({
    where: {
      clerkId: user.id,
    },
  });

  if(freelancer) {
    redirect(`/dashboard/${freelancer.id}`)
  }

  return <div>{children}</div>;
}
