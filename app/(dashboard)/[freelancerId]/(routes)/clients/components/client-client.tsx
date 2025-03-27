"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ClientColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface ClientClientProps {
  data: ClientColumn[];
}

export const ClientClient: React.FC<ClientClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Clients"
          description="Manage your clients and information"
        />
        <Button onClick={() => router.push(`/${params.freelancerId}/clients/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
    </>
  );
};
