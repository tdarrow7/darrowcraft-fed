import { CookieKeys } from "@/models/cookies";
import { setSession } from "@/actions/session";
import { SessionModel } from "@/models/session";
import { getCookie, setCookie } from "@/util/Cookies";

export const ensureSessionID = async () => {
  const token = getCookie(CookieKeys.SESSION);

  if (!token) {
    const data: SessionModel = await setSession();
    setCookie(CookieKeys.SESSION, data.id);
  }
};
