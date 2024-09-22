import { CoffeeModel } from "./coffee";

export interface CartModel {
  id: string;
  name?: string;
  session_id: number;
  active: boolean;
  cartItems?: CartItem[];
}

export interface CartItem {
  id: string;
  quantity: number;
  coffee: CoffeeModel;
}
