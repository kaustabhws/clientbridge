import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { name, profession } = body;

    if (!name || !profession) {
      return NextResponse.json("Name and profession are required", {
        status: 400,
      });
    }

    const freelancer = await prismadb.freelancer.create({
      data: {
        name,
        profession,
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return NextResponse.json(freelancer);
  } catch (error) {
    console.log("PROFILE_POST_ERROR", error);
    return NextResponse.json("INTERNAL SERVER ERROR", { status: 500 });
  }
}
