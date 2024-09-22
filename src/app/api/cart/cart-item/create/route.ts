"use server";
import { CartItem } from "@/models/cart";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  sessionID: string;
  active: boolean;
}

export async function GET(request: NextRequest) {
  try {
    const response = await axios.post<CartItem>(
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
