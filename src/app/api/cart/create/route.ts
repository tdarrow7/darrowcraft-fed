"use server";
import { CartModel } from "@/models/cart";
import { CookieKeys } from "@/models/cookies";
import { Session } from "@clerk/nextjs/server";
import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  sessionID: string;
  active: boolean;
}

export async function GET(request: NextRequest) {
  try {
    const response = await axios.post<CartModel>(
      `${process.env.API_ENDPOINT}cart/`,
      {
        session: "1",
      },
      {
        headers: {
          Authorization: `Token ${process.env.API_TOKEN}`,
        },
      }
    );
    // console.log("setting cookie using payload", response.data);

    // cookies().set(CookieKeys.CART, response.data.id);
    // console.log("completed cookie setting", response.data);
    return NextResponse.json(response.data);
  } catch (error) {
    console.log("err", error);
    return NextResponse.json(
      { error: "Failed to create cart" },
      { status: 500 }
    );
  }
}
