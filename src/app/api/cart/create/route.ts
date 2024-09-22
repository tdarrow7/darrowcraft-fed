"use server";
import { CartModel } from "@/models/cart";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

type Payload = {
  session: string;
  active: boolean;
};

export async function POST(request: NextRequest) {
  const data: Payload = await request.json();

  try {
    const response = await fetch(`${process.env.API_ENDPOINT}cart/`, {
      ...data,

      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${process.env.API_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to create cart");
    }

    const result = (await response.json()) as CartModel;
    console.log(result);

    return NextResponse.json(result);
  } catch (error) {
    console.log("err", error);
    return NextResponse.json(
      { error: "Failed to create cart" },
      { status: 500 }
    );
  }
}
