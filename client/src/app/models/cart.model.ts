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
  image: string;
  totalPrice: number;
}

export interface Cart {
  id: number;
  name:string;
  client_id: number;
  date: string;
  items: CartItemResponse[];
}


