interface Client {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  city: string;
  street: string;
}

export interface ClientRegister extends Client{
}


export interface ClientResponse extends Client{
  role: 1 | 2;
}

