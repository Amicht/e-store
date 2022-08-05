interface Client {
  id: number;
  email: string;
  password: string;
  
  firstName: string;
  lastName: string;
  city: string;
  street: string;
}

export interface ClientRegister extends Client{
}


export interface ClientResponse extends Client{
  role: 1 | 2;
}

