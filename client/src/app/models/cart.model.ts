export interface CartItem {
  product_id: number;
  cart_id: number;
  amount: number;
}

export interface CartItemReq extends CartItem {
}

export interface CartItemResponse extends CartItem {
  id: number;
  name: string;
  totalPrice: number;
}

export interface Cart {
  id: number;
  client_id: number;
  date: Date;
  items: CartItemResponse[];
}


