import { CartModel } from "@/models/cart";
import axios from "axios";

export async function POST(request: Request) {
      try {
        const response = await axios
          .post<CartModel>(
            `${process.env.API_ENDPOINT}cart/`,
            {},
            {
              headers: {
                Authorization: `Token ${process.env.API_TOKEN}`,
              },
            }
          )
          .then((response) => {
          });
      } catch (error) {
        console.log("err", error);
      }
    return new Response("Hello, Next.js!", {
      status: 200,
    });
  }