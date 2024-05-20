import { getMemberById } from "@/app/actions/memberActions";
import React, { ReactNode } from "react";
import MemberSidebar from "../MemberSidebar";
import { notFound } from "next/navigation";
import { Card } from "@nextui-org/react";
import { useMediaQuery } from "usehooks-ts";
import Sidebar from "../Sidebar";

const Layout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: { userId: string };
}) => {
  const member = await getMemberById(params.userId);
  if (!member) return notFound;

  return (
    <div className="grid grid-cols-12 gap-5 h-[80vh]">
      <div className="col-span-3">
        <Sidebar member={member} />
      </div>
      <div className="md:col-span-9 col-span-12 mt-5 md:mt-0 ">
        <Card className="w-full mt-10 h-[80vh]">{children}</Card>
      </div>
    </div>
  );
};

export default Layout;
