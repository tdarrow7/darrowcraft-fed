import { cookies } from "next/headers";

export enum CookieKeys {
  SESSION = "_session",
}

export function hasCookie(key: CookieKeys) {
  return cookies().has(key)
}

export function getCookie(key: CookieKeys) {
  return cookies().get(key)
}

export function setCookie(key: CookieKeys, value: string, path?: string, expires?: boolean, httpOnly?: boolean) {
  cookies().set({
    name: key,
    value: value,
    path: path ?? '/',
    httpOnly: httpOnly ?? true 
  })
};
