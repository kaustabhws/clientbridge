import prismadb from "@/lib/prismadb";
import { ClientForm } from "./components/table-form";

const ClientPage = async ({
  params,
}: {
  params: Promise<{ freelancerId: string; clientId: string }>;
}) => {
  const freelancerId = (await params).freelancerId;
  const clientId = (await params).clientId;

  const client = await prismadb.clients.findUnique({
    where: {
      id: clientId,
      freelancerId: freelancerId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-4 max-[425px]:px-3">
        <ClientForm initialData={client} />
      </div>
    </div>
  );
};

export default ClientPage;
