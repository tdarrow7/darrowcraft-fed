import { SessionModel } from "@/models/session";
import { CookieKeys, getCookie } from "./cookies";
import { GET } from "@/app/api/set-session/route";
import { setCookie } from "@/util/Cookies";

export const ensureSessionID = async () => {
  const token = getCookie(CookieKeys.SESSION);
  if (!token) setSession;
};

const setSession = async () => {
  const response = await fetch("/api/set-session");

  if (!response.ok) {
    throw new Error("failed to get set data");
  }

  const data: SessionModel = await response.json();

  setCookie(CookieKeys.SESSION, data.id);
};
