"use server";
import { SessionModel } from '@/models/session';
import { CookieKeys, getCookie, setCookie } from "@/util/Cookies";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const token = getCookie(CookieKeys.SESSION);

  if (!token)
    try {
      const response = await axios
        .post<SessionModel>(
          `${process.env.API_ENDPOINT}session/`,
          {},
          {
            headers: {
              Authorization: `Token ${process.env.API_TOKEN}`,
            },
          }
        )
        .then((response) => {
          setCookie(CookieKeys.SESSION, response.data.id);
        });
    } catch (error) {
      console.log("err", error);
    }
  return new Response("Hello, Next.js!", {
    status: 200,
  });
}
