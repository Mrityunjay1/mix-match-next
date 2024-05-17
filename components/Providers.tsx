"use client";

import { NextUIProvider } from "@nextui-org/system";
import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Providers({ children }: { children: ReactNode }) {
  return (
    <NextUIProvider>
      <ToastContainer position="bottom-right" className="z-50" />
      {children}
    </NextUIProvider>
  );
}

export default Providers;
