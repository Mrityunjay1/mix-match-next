import { CardBody, CardHeader, Divider } from "@nextui-org/react";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <>
      <CardHeader className="text-2xl font-semibold text-red-500">
        Chat
      </CardHeader>
      <Divider />
      <CardBody>Chat Go here</CardBody>
    </>
  );
}

export default page;
