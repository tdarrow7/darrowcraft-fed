"use server";

import { SessionModel } from "@/models/session";
import { CookieKeys, getCookie, setCookie } from "./cookies";
import { cookies } from "next/headers";

export const setSession = async () => {
  const response = await fetch(`${process.env.FED_ROOT}/api/session/create`);

  if (!response.ok) {
    throw new Error("failed to get set data");
  }

  const data: SessionModel = await response.json();
  return data;
};

export const getSession = () => {
  return cookies().get(CookieKeys.SESSION)?.value;
};
