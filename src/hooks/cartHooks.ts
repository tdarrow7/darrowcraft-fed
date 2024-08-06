import { CookieKeys, getCookie } from '@/util/Cookies'
import React, { useState } from 'react'

export const useAddToCart = async () => {
  const [cart, setCart] = useState(getCookie(CookieKeys.CART))
  if (!cart) {
    const _x = await fetch('/api/cart/post')
    setCart(_x)
  }
  return (
    ''
  )
}
