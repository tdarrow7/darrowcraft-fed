"use server";

import { CartModel } from "@/models/cart";
import { CookieKeys } from "@/models/cookies";
import { cookies } from "next/headers";
import { getSession } from "./session";
import { setCookie } from "./cookies";

export const addToCart = async (id: number, quanity: number) => {
  const cartID = await getCart();
  console.log(cartID);

  //   console.log("getting cart", getCart());
};

export const getCart = async () => {
  if (cookies().has(CookieKeys.CART)) {
    console.log("has cookie");

    return cookies().get(CookieKeys.CART);
  } else {
    const session: string = "1";
    return await setCart(session);
  }
};

export const setCart = async (session: string) => {
  const response = await fetch(`${process.env.FED_ROOT}/api/cart/create`);

  if (!response.ok) {
    throw new Error("failed to get set data");
  }

  const data: CartModel = await response.json();
  cookies().set(CookieKeys.CART, data.id);
  console.log(data);

  return data;
};
