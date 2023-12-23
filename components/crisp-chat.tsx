"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d04ede18-ce06-43e2-ac0d-d845fbf7772b");
  }, []);

  return null;
};
