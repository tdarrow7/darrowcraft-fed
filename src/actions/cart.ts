"use server";

import { CookieKeys } from "@/models/cookies";
import { cookies } from "next/headers";

export const addToCart = async (id: number, quanity: number) => {
  const cartID = await getCart();
  console.log(cartID);

  //   console.log("getting cart", getCart());
};

export const getCart = async () => {
  if (cookies().has(CookieKeys.CART)) return cookies().get(CookieKeys.CART);
  else return await setCart();
};

export const setCart = async () => {};
