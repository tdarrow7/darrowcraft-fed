"use client";

import { CookieKeys } from "@/models/cookies";

export function getCookie(key: CookieKeys) {
  var match = document.cookie.match(new RegExp("(^| )" + key + "=([^;]+)"));
  if (match) return match[2];
}

export function setCookie(key: CookieKeys, value: string) {
  document.cookie = `${key}=${value}`;
}
