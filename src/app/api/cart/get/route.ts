"use server";
import { CartModel } from '@/models/cart';
import { CookieKeys, getCookie, setCookie } from "@/util/Cookies";
import axios from "axios";
import { cookies } from 'next/headers';
import { useState } from 'react';

export async function GET(request: Request) {
  return getCookie(CookieKeys.CART)
}