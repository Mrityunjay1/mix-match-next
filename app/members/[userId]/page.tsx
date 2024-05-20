import { getMemberById } from "@/app/actions/memberActions";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { notFound } from "next/navigation";
import React from "react";

type Props = {};

async function MemberDetailsPage({ params }: { params: { userId: string } }) {
  const member = await getMemberById(params.userId);

  if (!member) return notFound;
  return (
    <>
      <CardHeader className="text-2xl font-semibold text-red-500">
        Profile
      </CardHeader>
      <Divider />
      <CardBody>{member.description}</CardBody>
    </>
  );
}

export default MemberDetailsPage;
