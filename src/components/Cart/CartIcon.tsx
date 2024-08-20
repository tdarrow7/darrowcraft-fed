"use client";
import { ensureSessionID } from "@/actions/session";
import { SessionModel } from "@/models/session";
import { CookieKeys, setCookie } from "@/util/Cookies";
import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";

type Props = {};

const CartIcon = (props: Props) => {
  // useEffect(() => {
  //   const setSessionCookie = async () => {
  //     const sessionID = ensureSessionID()

  //     setCookie(CookieKeys.SESSION, sessionID.);
  //   };
  //   setSessionCookie();
  // }, []);

  useEffect(() => {
    const setSessionCookie = async () => {
      await fetch("/api/set-session");
    };
    setSessionCookie();
  }, []);

  return (
    <div className="cart relative group text-green-500 hover:text-green-900 transition-colors cursor-pointer">
      <IoCartOutline className="text-3xl " />
      <span className="-top-1 -right-1 absolute text-[8px] rounded-full bg-red-700 text-white block py-1 px-1 leading-none">
        0
      </span>
    </div>
  );
};

export default CartIcon;
