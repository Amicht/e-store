export interface Product{
    name: string;
    category_id: number;
    price: number;
  }
export interface ProductRes extends Product{
  id: number;
  image: string;
}

export interface ProductReq extends Product{
  image: File;
}



