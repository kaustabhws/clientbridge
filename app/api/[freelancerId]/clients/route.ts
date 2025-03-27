import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ freelancerId: string }> }
) {
  try {
    const user = await currentUser();
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { name, email, phone, address, company, status, notes } = body;

    const freelancerId = (await params).freelancerId;

    if (!name || !email || !status) {
      return new NextResponse("Bad Request", { status: 400 });
    }

    const freelancer = await prismadb.freelancer.findFirst({
      where: {
        id: freelancerId,
      },
    });

    if (!freelancer) {
      return new NextResponse("Not Found", { status: 404 });
    }

    const client = await prismadb.clients.create({
      data: {
        name,
        email,
        phone,
        address,
        company,
        status,
        notes,
        freelancerId,
      },
    });

    return NextResponse.json(client);
  } catch (error) {
    console.log("CLIENT_POST_ERROR", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ freelancerId: string }> }
) {
  try {
    const freelancerId = (await params).freelancerId;
    const clients = await prismadb.clients.findMany({
      where: {
        freelancerId,
      },
      include: {
        freelancer: true,
        projects: true,
        invoices: true,
      },
    });

    return NextResponse.json(clients);
  } catch (error) {
    console.log("CLIENT_GET_ERROR", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
