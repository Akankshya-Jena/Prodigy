"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e6d12d19-006d-4d65-91ad-293b9f8d96e0");
  }, []);

  return null;
};