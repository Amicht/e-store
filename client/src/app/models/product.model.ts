export interface Product{
    name: string;
    category_id: number;
    price: number;
    image: string;
}
export interface ProductRes extends Product{
    id: number;
}

export interface ProductReq extends Product{
}



