"use server";
import { SessionModel } from "@/models/session";
import { CookieKeys, getCookie, setCookie } from "@/util/Cookies";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // const token = getCookie(CookieKeys.SESSION);

  try {
    const response = await axios.post<SessionModel>(
      `${process.env.API_ENDPOINT}session/`,
      {},
      {
        headers: {
          Authorization: `Token ${process.env.API_TOKEN}`,
        },
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    console.log("err", error);
    return NextResponse.json(
      { error: "Failed to create session" },
      { status: 500 }
    );
  }
  // if (!token)
  // return new Response("Hello, Next.js!", {
  //   status: 200,
  // });
}
