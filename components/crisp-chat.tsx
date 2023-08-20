"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("24d1b925-9477-4761-ada0-53ae2fe511b1");
  }, []);
  return null;
};
