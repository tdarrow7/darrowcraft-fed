"use server";
import { SessionModel } from "@/models/session";
import { CookieKeys, setCookie } from "@/actions/cookies";
import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
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
    console.log("setting cookie using payload", response.data);

    cookies().set(CookieKeys.SESSION, response.data.id);
    console.log("completed cookie setting", response.data);
    return NextResponse.json(response.data);
  } catch (error) {
    console.log("err", error);
    return NextResponse.json(
      { error: "Failed to create session" },
      { status: 500 }
    );
  }
}
