export interface OrderModelRequest{
  client_id: number;
  cart_id: number;
  totalPrice: number;
  city: string;
  street: string;
  arrival: string;
  creditNumber: number;
}
export interface OrderModelResponce extends OrderModelRequest{
  id: number;
  date: Date;
}

export interface OrderCountModel{
  total: number
}

