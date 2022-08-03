class ProductModel{
    id; 
    name;
    category_id; 
    price; 
    image;
    constructor(product){
        this.id = null;
        this.name= product.name;
        this.category_id= +product.category_id;
        this.price= +product.price;
        this.image= product.image;
    }
}

export { ProductModel };