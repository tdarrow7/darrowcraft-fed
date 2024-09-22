"use server";

import { CartModel } from "@/models/cart";
import { CookieKeys } from "@/models/cookies";
import { cookies } from "next/headers";
import { getSession } from "./session";
import { getCookie, setCookie } from "./cookies";
import axios from "axios";

export const addToCart = async (id: number, quanity: number) => {
  const cartID = await getCart();
  console.log(cartID);

  // const cartItem;
  //   console.log("getting cart", getCart());
};

export const getCart = async () => {
  try {
    if (cookies().has(CookieKeys.CART)) {
      return cookies().get(CookieKeys.CART);
    } else {
      const session = await getSession();
      if (!session) throw Error();
      return await setCart(session);
    }
  } catch (error) {}
};

export const setCart = async (session: string) => {
  session;
  try {
    const response = await axios.post(
      `${process.env.FED_ROOT}/api/cart/create`,
      {
        method: "POST",
        body: JSON.stringify({
          session: session,
          active: true,
        }),
      }
    );
    const data: CartModel = response.data;

    cookies().set(CookieKeys.CART, data.id);
    return data;
  } catch (error) {
    console.error("error posting data", error);
  }
};
