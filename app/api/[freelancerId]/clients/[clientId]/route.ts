import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ freelancerId: string; clientId: string }> }
) {
  try {
    const user = await currentUser();
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const freelancerId = (await params).freelancerId;
    const clientId = (await params).clientId;
    const body = await req.json();
    const { name, email, phone, address, company, status, notes } = body;

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

    const client = await prismadb.clients.update({
      where: {
        id: clientId,
        freelancerId,
      },
      data: {
        name,
        email,
        phone,
        address,
        company,
        status,
        notes,
      },
    });

    return NextResponse.json(client);
  } catch (error) {
    console.log("CLIENT_PATCH_ERROR", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ freelancerId: string; clientId: string }> }
) {
  try {
    const user = await currentUser();
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const freelancerId = (await params).freelancerId;
    const clientId = (await params).clientId;

    const freelancer = await prismadb.freelancer.findFirst({
      where: {
        id: freelancerId,
      },
    });

    if (!freelancer) {
      return new NextResponse("Not Found", { status: 404 });
    }

    const client = await prismadb.clients.delete({
      where: {
        id: clientId,
        freelancerId,
      },
    });

    return NextResponse.json(client);
  } catch (error) {
    console.log("CLIENT_DELETE_ERROR", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
