"use server";
import { SessionModel } from "@/models/session";
import axios from "axios";
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
    return NextResponse.json(response.data);
  } catch (error) {
    console.log("err", error);
    return NextResponse.json(
      { error: "Failed to create session" },
      { status: 500 }
    );
  }
}
