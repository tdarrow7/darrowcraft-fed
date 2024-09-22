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

<<<<<<< HEAD
export const getSession = () => {
=======
export const fetchSessionCookie = () => {
>>>>>>> fe8b025a2bd7216f3a49a88afe128895168d7d1f
  return cookies().get(CookieKeys.SESSION)?.value;
};
