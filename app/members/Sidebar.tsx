"use client";

import React from "react";
import { useMediaQuery } from "usehooks-ts";
import { getMemberById } from "../actions/memberActions";
import { notFound } from "next/navigation";
import MemberSidebar from "./MemberSidebar";
import MobileMemberSidebar from "./MobileMemberSidebar";

type Props = {};

function Sidebar({ member }: any) {
  const isDesktop = useMediaQuery("(min-width:768px)", {
    initializeWithValue: false,
  });

  if (isDesktop) return <MemberSidebar member={member} />;
  return <MobileMemberSidebar member={member} />;
}

export default Sidebar;
