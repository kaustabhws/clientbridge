import prismadb from "@/lib/prismadb";
import { ClientClient } from "./components/client-client";
import { ClientColumn } from "./components/columns";
import { format } from "date-fns";

const ClientsPage = async ({
  params,
}: {
  params: Promise<{ freelancerId: string }>;
}) => {
  const freelancerId = (await params).freelancerId;

  const clients = await prismadb.clients.findMany({
    where: {
      freelancerId,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      projects: true,
    },
  });

  const formattedClients: ClientColumn[] = clients.map((client) => {
    return {
      id: client.id,
      name: client.name,
      company: client.company!,
      email: client.email,
      status: client.status,
      projects: client.projects.length,
      createdAt: format(client.createdAt, 'MMMM do, yyyy'),
    };
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6 max-[425px]:px-3">
        <ClientClient data={formattedClients} />
      </div>
    </div>
  );
};

export default ClientsPage;
